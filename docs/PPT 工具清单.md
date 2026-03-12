# 🛠️ PPT 制作工具清单

## ✅ 已安装工具

### 1. Marp CLI (v4.2.3)
**用途**: Markdown 转 PPT/PDF/HTML
```bash
marp --version
# @marp-team/marp-cli v4.2.3 (w/ @marp-team/marp-core v4.3.0)
```

**功能**:
- ✅ Markdown 转 PPTX
- ✅ Markdown 转 PDF
- ✅ Markdown 转 HTML
- ✅ 实时预览
- ✅ 自定义主题

**使用示例**:
```bash
# 转 PPTX
marp --pptx presentation.md

# 转 PDF
marp --pdf presentation.md

# 实时预览
marp --watch --server presentation.md
```

---

## 🔧 推荐安装工具

### 2. LibreOffice（推荐）
**用途**: 免费开源的 Office 套件，可编辑 PPTX

**安装命令**:
```bash
winget install --id TheDocumentFoundation.LibreOffice
```

**优势**:
- 完全免费
- 支持 PPTX 格式
- 可编程自动化
- 命令行批量转换

---

### 3. Pandoc（推荐）
**用途**: 文档格式转换神器

**安装命令**:
```bash
choco install pandoc
# 或
winget install --id JohnMacFarlane.Pandoc
```

**功能**:
- Markdown ↔ Word
- Markdown ↔ PDF
- Markdown ↔ HTML
- Markdown ↔ PPTX (通过 beamer)

---

### 4. PowerPoint Online / Desktop
**用途**: 最终编辑和展示

**优势**:
- 最兼容的 PPTX 格式
- 丰富的动画效果
- 专业的演示功能
- 演讲者备注

---

## 🎨 可选美化工具

### 5. Canva（在线）
**网址**: https://www.canva.com/
**用途**: 在线设计工具，可导出 PPT

**优势**:
- 海量模板
- 拖拽式操作
- 丰富的素材库
- 支持团队协作

---

### 6. Beautiful.ai（在线）
**网址**: https://www.beautiful.ai/
**用途**: AI 驱动的 PPT 制作工具

**优势**:
- AI 自动排版
- 智能设计建议
- 专业模板
- 一键美化

---

### 7. Gamma（在线）
**网址**: https://gamma.app/
**用途**: AI 生成 PPT

**优势**:
- AI 生成完整 PPT
- 支持导入 Markdown
- 自动排版
- 导出 PPTX/PDF

---

## 📊 图片处理工具

### 8. ImageMagick
**用途**: 命令行图片处理

**安装**:
```bash
choco install imagemagick
```

**功能**:
- 图片格式转换
- 批量处理
- 添加水印
- 调整尺寸

---

### 9. GIMP
**用途**: 免费开源的 Photoshop 替代品

**安装**:
```bash
winget install --id GIMP.GIMP
```

**功能**:
- 图片编辑
- 图层处理
- 滤镜效果
- 批量处理

---

## 🎬 视频工具（可选）

### 10. FFmpeg
**用途**: 视频处理

**安装**:
```bash
choco install ffmpeg
```

**功能**:
- 视频格式转换
- 添加旁白
- 视频剪辑
- 添加字幕

---

### 11. OBS Studio
**用途**: 录屏和直播

**安装**:
```bash
winget install --id OBSProject.OBSStudio
```

**功能**:
- 屏幕录制
- 摄像头录制
- 音频录制
- 实时推流

---

## 📝 我的推荐工作流程

### 方案 A：纯命令行（当前）
```
Markdown → Marp → PPTX/PDF
```
**优势**: 可版本控制、自动化、快速

### 方案 B：混合编辑
```
Markdown → Marp → PPTX → PowerPoint 美化
```
**优势**: 快速生成 + 专业美化

### 方案 C：在线工具
```
Markdown → Gamma/Beautiful.ai → PPTX
```
**优势**: AI 辅助、模板丰富

---

## 🎯 当前能力评估

| 能力 | 状态 | 说明 |
|------|------|------|
| Markdown 转 PPT | ✅ 已具备 | Marp CLI |
| 基础排版 | ✅ 已具备 | CSS 样式 |
| 表格美化 | ✅ 已具备 | 渐变/阴影 |
| 卡片布局 | ✅ 已具备 | Grid 布局 |
| 图标支持 | ✅ 已具备 | Emoji/Unicode |
| 代码高亮 | ✅ 已具备 | 内置支持 |
| 动画效果 | ❌ 不支持 | 需 PowerPoint |
| 图表制作 | ❌ 不支持 | 需外部工具 |
| 图片编辑 | ❌ 不支持 | 需 ImageMagick |
| 视频旁白 | ❌ 不支持 | 需 FFmpeg |

---

## 💡 建议

### 立即可用
- ✅ **Marp CLI** - 已安装，完全够用

### 推荐安装
- 📌 **LibreOffice** - 免费编辑 PPTX
- 📌 **Pandoc** - 格式转换

### 按需安装
- 🎨 **Canva** - 需要精美设计时
- 📊 **GIMP** - 需要图片编辑时
- 🎬 **FFmpeg** - 需要做视频时

---

## 🚀 下一步行动

**如果你想提升 PPT 质量，建议：**

1. **安装 LibreOffice** - 用于最终编辑
   ```bash
   winget install --id TheDocumentFoundation.LibreOffice
   ```

2. **使用 Marp 生成初稿**
   ```bash
   marp --pptx presentation.md
   ```

3. **用 LibreOffice/PowerPoint 美化**
   - 添加动画
   - 调整布局
   - 插入图片
   - 添加图表

---

*最后更新：2026-03-12*
