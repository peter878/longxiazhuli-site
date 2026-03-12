---
marp: true
theme: gaia
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
  
  section {
    font-family: 'Noto Sans SC', sans-serif;
    padding: 50px;
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  }
  
  h1 {
    color: #dc2626;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.3em;
  }
  
  h2 {
    color: #1f2937;
    font-size: 1.5em;
    font-weight: 600;
    border-left: 5px solid #dc2626;
    padding-left: 15px;
    margin-top: 0;
  }
  
  h3 {
    color: #dc2626;
    font-size: 1.1em;
    font-weight: 600;
    margin-top: 1em;
  }
  
  strong {
    color: #dc2626;
    font-weight: 600;
  }
  
  table {
    font-size: 0.85em;
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  th {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    color: white;
    font-weight: 600;
    padding: 10px;
    text-align: left;
  }
  
  td {
    padding: 8px 10px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  tr:nth-child(even) {
    background-color: #f9fafb;
  }
  
  .highlight {
    background: linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%);
    padding: 15px;
    border-left: 5px solid #dc2626;
    border-radius: 8px;
    margin: 1em 0;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 1em 0;
  }
  
  .card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  }
  
  .card h3 {
    margin-top: 0;
  }
  
  ul {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }
  
  li {
    margin: 0.3em 0;
    line-height: 1.6;
  }
  
  pre {
    background: #1f2937;
    color: #f3f4f6;
    padding: 15px;
    border-radius: 8px;
    font-size: 0.8em;
    overflow-x: auto;
  }
---

<!-- _class: lead -->

# 企业 AI 安全解决方案

## 构建可信、可控、合规的 AI 应用体系

---

# 客户痛点与技术架构

<div class="grid">
  <div class="card">
    <h3>🔒 核心痛点</h3>
    <ul>
      <li><strong>数据安全</strong>：敏感信息泄露、数据留存风险</li>
      <li><strong>内容风险</strong>：输出不可控、品牌声誉受损</li>
      <li><strong>合规挑战</strong>：缺乏审计、权限失控</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>🏗️ 三层防护架构</h3>
    <pre style="font-size: 0.7em;">业务应用层
    ↓
安全网关层
    ↓
  AI 服务层</pre>
    <div class="highlight" style="font-size: 0.9em;">
    <strong>✅ 核心价值</strong><br>
    数据不出域 | 内容可管控 | 使用可追溯
    </div>
  </div>
</div>

---

# 三大核心能力

<div class="grid">
  <div class="card">
    <h3>🔍 输入安全审核</h3>
    <table>
      <tr><th>审核类型</th><th>技术实现</th></tr>
      <tr><td>敏感信息检测</td><td>正则 + NER</td></tr>
      <tr><td>机密文档识别</td><td>文档分类</td></tr>
      <tr><td>Prompt 注入检测</td><td>语义分析</td></tr>
      <tr><td>数据脱敏</td><td>自动替换</td></tr>
    </table>
    <div class="highlight" style="font-size: 0.85em;">
    <strong>处理策略</strong>：阻断 | 脱敏 | 审批 | 记录
    </div>
  </div>
  
  <div class="card">
    <h3>⚠️ 输出安全审核</h3>
    <table>
      <tr><th>审核类型</th><th>技术实现</th></tr>
      <tr><td>合规性检查</td><td>规则引擎</td></tr>
      <tr><td>敏感词过滤</td><td>词库 + 语义</td></tr>
      <tr><td>代码安全扫描</td><td>SAST</td></tr>
      <tr><td>版权检测</td><td>相似度比对</td></tr>
    </table>
    <div class="highlight" style="font-size: 0.85em;">
    <strong>处理策略</strong>：放行 | 修改 | 代答 | 人工
    </div>
  </div>
</div>

<div class="grid">
  <div class="card">
    <h3>🔐 访问控制与审计</h3>
    <ul>
      <li><strong>权限管理</strong>：用户分级、应用分级、配额管理</li>
      <li><strong>审计日志</strong>：完整记录、可追溯</li>
      <li><strong>合规报表</strong>：按日/周/月生成，支持导出</li>
    </ul>
  </div>
</div>
