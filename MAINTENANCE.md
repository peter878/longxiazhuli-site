# 🦞 龙虾助理网站 - 维护手册

## 📋 目录结构

```
longxiazhuli-site/
├── src/
│   ├── layouts/         # 布局文件
│   │   └── BaseLayout.astro
│   ├── pages/           # 页面文件
│   │   ├── guide/       # 入门教程
│   │   ├── advanced/    # 进阶使用
│   │   ├── cases/       # 实战案例
│   │   ├── news/        # 新闻资讯
│   │   ├── faq/         # 常见问题
│   │   └── security/    # 安全防护
│   └── styles/          # 样式文件
├── scripts/             # 维护脚本
│   └── backup.cjs       # 备份脚本
├── backups/             # 备份目录（自动生成）
├── package.json
└── vercel.json
```

## 🔧 常用命令

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 部署

```bash
# 部署到 Vercel
vercel --prod

# 查看部署状态
vercel ls
```

### 备份

```bash
# 创建备份
node scripts/backup.cjs [备份名称]

# 列出所有备份
node scripts/backup.cjs --list

# 恢复备份
node scripts/backup.cjs --restore <备份名称>
```

## 📦 版本管理

### Git 工作流

```bash
# 提交更改
git add -A
git commit -m "类型：描述"

# 创建版本标签
git tag -a v1.0.0 -m "版本说明"

# 查看标签
git tag -l
```

### Commit 规范

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式
- `refactor:` 重构
- `chore:` 构建/工具

## 🚨 故障恢复

### 场景 1：网站构建失败

```bash
# 1. 查看错误日志
npm run build

# 2. 回滚到上一个版本
git reset --hard HEAD~1

# 3. 或者使用备份恢复
node scripts/backup.cjs --list
node scripts/backup.cjs --restore <备份名称>
```

### 场景 2：Vercel 部署失败

1. 打开 Vercel Dashboard
2. 找到失败的部署
3. 查看 Build Logs
4. 根据错误修复后重新部署

### 场景 3：文件损坏

```bash
# 从备份恢复单个文件
cp backups/<备份名称>/src/pages/index.astro src/pages/index.astro
```

## 📊 性能优化

### 图片优化

- 使用 WebP 格式
- 压缩图片（推荐 TinyPNG）
- 启用懒加载

### 代码优化

- 移除未使用的 CSS
- 压缩 JS/CSS
- 启用 CDN 缓存

### SEO 优化

- 添加 meta 描述
- 设置 Open Graph 标签
- 生成 sitemap.xml

## 🔐 安全注意事项

1. **API Key 管理**
   - 不要提交 `.env` 文件到 Git
   - 使用环境变量存储敏感信息

2. **定期更新依赖**
   ```bash
   npm audit
   npm update
   ```

3. **备份策略**
   - 每次大改动前备份
   - 保留至少 3 个历史版本
   - 定期导出到云存储

## 📞 支持

- 项目地址：https://github.com/你的仓库
- Vercel 项目：https://vercel.com/peter878s-projects/longxiazhuli-site
- 文档：https://www.longxiazhuli.com/

---

*最后更新：2026-03-12*
