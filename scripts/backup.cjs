#!/usr/bin/env node

/**
 * 网站备份脚本
 * 用法：node backup.js [备份名称]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BACKUP_DIR = path.join(__dirname, '..', 'backups');
const PROJECT_DIR = path.join(__dirname, '..');

// 生成备份名称
const getBackupName = () => {
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0];
  const timeStr = date.toTimeString().split(' ')[0].replace(/:/g, '-');
  return `backup-${dateStr}-${timeStr}`;
};

// 创建备份
const createBackup = (customName) => {
  const backupName = customName || getBackupName();
  const backupPath = path.join(BACKUP_DIR, backupName);
  
  console.log(`📦 开始备份到：${backupPath}`);
  
  // 创建备份目录
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  
  fs.mkdirSync(backupPath, { recursive: true });
  
  // 要备份的关键文件
  const filesToBackup = [
    'src/layouts/BaseLayout.astro',
    'src/pages/index.astro',
    'src/pages/guide/install.astro',
    'src/pages/faq/index.astro',
    'src/pages/news/index.astro',
    'src/pages/cases/index.astro',
    'package.json',
    'vercel.json'
  ];
  
  // 复制文件
  filesToBackup.forEach(file => {
    const srcPath = path.join(PROJECT_DIR, file);
    const destPath = path.join(backupPath, file);
    
    if (fs.existsSync(srcPath)) {
      // 确保目标目录存在
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ 备份：${file}`);
    } else {
      console.log(`⚠️  跳过（文件不存在）：${file}`);
    }
  });
  
  // 创建 Git 快照
  try {
    console.log('\n📸 创建 Git 快照...');
    execSync('git status --short', { stdio: 'pipe' });
    const status = execSync('git status --short', { encoding: 'utf8' });
    fs.writeFileSync(path.join(backupPath, 'git-status.txt'), status);
    console.log('✅ Git 状态已保存');
  } catch (error) {
    console.log('⚠️  Git 操作跳过');
  }
  
  // 创建备份清单
  const manifest = {
    backupName,
    backupPath,
    timestamp: new Date().toISOString(),
    files: filesToBackup.filter(f => fs.existsSync(path.join(PROJECT_DIR, f))),
    gitCommit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
  };
  
  fs.writeFileSync(
    path.join(backupPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n✅ 备份完成！');
  console.log(`📁 备份位置：${backupPath}`);
  
  return backupPath;
};

// 列出所有备份
const listBackups = () => {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log('❌ 没有找到备份目录');
    return;
  }
  
  const backups = fs.readdirSync(BACKUP_DIR);
  console.log(`\n📦 找到 ${backups.length} 个备份:\n`);
  
  backups.forEach(backup => {
    const manifestPath = path.join(BACKUP_DIR, backup, 'manifest.json');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      console.log(`  📁 ${backup}`);
      console.log(`     时间：${manifest.timestamp}`);
      console.log(`     Commit: ${manifest.gitCommit.substring(0, 7)}\n`);
    } else {
      console.log(`  📁 ${backup}`);
    }
  });
};

// 恢复备份
const restoreBackup = (backupName) => {
  const backupPath = path.join(BACKUP_DIR, backupName);
  
  if (!fs.existsSync(backupPath)) {
    console.log(`❌ 备份不存在：${backupName}`);
    return;
  }
  
  console.log(`🔄 开始恢复备份：${backupName}`);
  
  // 复制文件回项目目录
  const filesToRestore = [
    'src/layouts/BaseLayout.astro',
    'src/pages/index.astro',
    'src/pages/guide/install.astro',
    'src/pages/faq/index.astro',
    'src/pages/news/index.astro',
    'src/pages/cases/index.astro',
    'package.json',
    'vercel.json'
  ];
  
  filesToRestore.forEach(file => {
    const srcPath = path.join(backupPath, file);
    const destPath = path.join(PROJECT_DIR, file);
    
    if (fs.existsSync(srcPath)) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ 恢复：${file}`);
    }
  });
  
  console.log('\n✅ 恢复完成！请检查文件是否正确。');
};

// 主程序
const args = process.argv.slice(2);

if (args[0] === '--list' || args[0] === '-l') {
  listBackups();
} else if (args[0] === '--restore' || args[0] === '-r') {
  if (!args[1]) {
    console.log('❌ 请指定要恢复的备份名称');
    console.log('用法：node backup.js --restore <备份名称>');
    process.exit(1);
  }
  restoreBackup(args[1]);
} else {
  const backupName = args[0];
  createBackup(backupName);
}
