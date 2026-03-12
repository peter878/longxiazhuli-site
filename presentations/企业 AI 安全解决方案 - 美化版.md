---
marp: true
theme: gaia
paginate: true
size: 16:9
math: katex
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
  
  section {
    font-family: 'Noto Sans SC', sans-serif;
    padding: 50px;
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  }
  
  h1 {
    color: #dc2626;
    font-size: 2.2em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5em;
    text-shadow: 2px 2px 4px rgba(220, 38, 38, 0.1);
  }
  
  h2 {
    color: #1f2937;
    font-size: 1.6em;
    font-weight: 600;
    border-left: 5px solid #dc2626;
    padding-left: 15px;
    margin-top: 0;
  }
  
  h3 {
    color: #dc2626;
    font-size: 1.2em;
    font-weight: 600;
    margin-top: 1.5em;
  }
  
  p {
    color: #374151;
    line-height: 1.8;
    font-size: 1em;
  }
  
  ul, ol {
    color: #374151;
    line-height: 1.8;
  }
  
  li {
    margin: 0.5em 0;
  }
  
  strong {
    color: #dc2626;
    font-weight: 600;
  }
  
  table {
    font-size: 0.9em;
    border-collapse: collapse;
    width: 100%;
    margin: 1.5em 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  th {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    color: white;
    font-weight: 600;
    padding: 12px;
    text-align: left;
  }
  
  td {
    padding: 10px 12px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  tr:nth-child(even) {
    background-color: #f9fafb;
  }
  
  tr:hover {
    background-color: #fef2f2;
  }
  
  code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    background: #1f2937;
    color: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
  
  pre {
    background: #1f2937;
    color: #f3f4f6;
    padding: 20px;
    border-radius: 8px;
    font-size: 0.85em;
    overflow-x: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .highlight {
    background: linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%);
    padding: 20px;
    border-left: 5px solid #dc2626;
    border-radius: 8px;
    margin: 1.5em 0;
    box-shadow: 0 2px 4px rgba(220, 38, 38, 0.1);
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 1.5em 0;
  }
  
  .card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
  }
  
  .card h3 {
    margin-top: 0;
    color: #dc2626;
  }
  
  .badge {
    display: inline-block;
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    color: white;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 0.85em;
    font-weight: 600;
    margin: 0 4px;
  }
  
  .footer {
    position: absolute;
    bottom: 20px;
    right: 50px;
    font-size: 0.8em;
    color: #9ca3af;
  }
---

<!-- _class: lead -->

# 企业 AI 安全解决方案

## 构建可信、可控、合规的 AI 应用体系

<div class="highlight" style="text-align: center; margin-top: 2em;">

🔒 数据安全 &nbsp;|&nbsp; ⚠️ 内容风控 &nbsp;|&nbsp; 🛡️ 合规审计

</div>

---

# 客户痛点：企业使用 AI 的三大担忧

<div class="grid">
  <div class="card">
    <h3>🔒 数据安全</h3>
    <ul>
      <li><strong>敏感信息泄露</strong><br>员工上传机密文档到公有云 AI</li>
      <li><strong>数据留存风险</strong><br>提问内容被 AI 厂商记录和训练</li>
      <li><strong>合规问题</strong><br>违反数据出境、隐私保护等法规</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>⚠️ 内容风险</h3>
    <ul>
      <li><strong>输出不可控</strong><br>AI 生成错误、有害、违规内容</li>
      <li><strong>品牌声誉</strong><br>客服 AI 做出错误承诺或不当言论</li>
      <li><strong>法律责任</strong><br>生成内容侵犯版权、传播虚假信息</li>
    </ul>
  </div>
</div>

<div class="highlight">
<strong>🛡️ 安全挑战</strong>：缺乏审计、权限失控、技术门槛高
</div>

---

# 解决方案：三层防护架构

## 🏗️ 技术架构

<pre>
┌─────────────────────────────────────────┐
│           业务应用层                     │
│   AI 客服 | AI 办公 | AI 营销 | AI 编程   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│     安全网关层（核心能力）                │
│  • 输入审核  • 输出审核  • 敏感词过滤    │
│  • 文档脱敏  • 访问控制  • 审计日志      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           AI 服务层                       │
│   公有云 API | 私有化部署 | 混合架构     │
└─────────────────────────────────────────┘
</pre>

<div class="highlight">
<strong>✅ 核心价值</strong>：数据不出域 &nbsp;|&nbsp; 内容可管控 &nbsp;|&nbsp; 使用可追溯
</div>

---

# 核心能力一：输入安全审核

| 审核类型 | 检测对象 | 技术实现 |
|----------|----------|----------|
| **敏感信息检测** | 身份证号、手机号、银行卡 | 正则匹配 + NER 识别 |
| **机密文档识别** | 合同、财报、源代码 | 文档分类 + 关键词匹配 |
| **Prompt 注入检测** | 越狱指令、恶意提示 | 语义分析 + 规则引擎 |
| **数据脱敏** | 个人信息、商业机密 | 自动替换/掩码处理 |

<div class="grid">
  <div class="card">
    <h3>🛡️ 处理策略</h3>
    <ul>
      <li><strong>阻断</strong>：高危内容直接拦截</li>
      <li><strong>脱敏</strong>：自动替换敏感信息</li>
      <li><strong>审批</strong>：转人工审核</li>
      <li><strong>记录</strong>：留痕审计</li>
    </ul>
  </div>
</div>

---

# 核心能力二：输出安全审核

| 审核类型 | 检测对象 | 技术实现 |
|----------|----------|----------|
| **合规性检查** | 违规承诺、虚假宣传 | 规则引擎 + 事实核查 |
| **敏感词过滤** | 政治敏感、色情暴力 | 词库匹配 + 语义理解 |
| **代码安全扫描** | 漏洞代码、硬编码密钥 | SAST + 密钥检测 |
| **版权检测** | 抄袭、侵权内容 | 相似度比对 |

<div class="highlight">
<strong>🛡️ 处理策略</strong>：直接放行 &nbsp;|&nbsp; 修改后返回 &nbsp;|&nbsp; 安全代答 &nbsp;|&nbsp; 人工审核
</div>

---

# 核心能力三：访问控制与审计

<div class="grid">
  <div class="card">
    <h3>🔐 权限管理</h3>
    <ul>
      <li><strong>用户分级</strong>：管理员/普通用户/访客</li>
      <li><strong>应用分级</strong>：不同应用不同策略</li>
      <li><strong>配额管理</strong>：调用次数限制</li>
      <li><strong>IP 白名单</strong>：限制访问来源</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>📊 审计日志</h3>
    <pre><code>{
  "user": "zhangsan@company",
  "action": "query",
  "risk_level": "low",
  "duration_ms": 234
}</code></pre>
  </div>
</div>

<div class="highlight">
<strong>📈 合规报表</strong>：按日/周/月生成报告，支持导出 PDF/Excel
</div>

---

# 部署方案

| 部署模式 | 适用客户 | 优势 | 周期 |
|----------|----------|------|------|
| **SaaS 服务** | 中小企业 | <span class="badge">开箱即用</span><span class="badge">按需付费</span> | 1 天 |
| **私有化部署** | 大型企业 | <span class="badge">数据本地</span><span class="badge">完全可控</span> | 2-4 周 |
| **混合架构** | 集团企业 | <span class="badge">核心数据本地</span><span class="badge">弹性扩展</span> | 3-6 周 |

<div class="grid" style="margin-top: 1.5em;">
  <div class="card">
    <h3>🔧 技术集成</h3>
    <ul>
      <li><strong>API 集成</strong>：RESTful API</li>
      <li><strong>SDK 支持</strong>：Python/Java/Go/Node.js</li>
      <li><strong>网关模式</strong>：反向代理</li>
      <li><strong>插件模式</strong>：主流 AI 平台插件</li>
    </ul>
  </div>
</div>

---

# 客户案例与价值

| 客户类型 | 典型场景 | 核心价值 |
|----------|----------|----------|
| **金融机构** | AI 客服、智能投顾 | 合规审计、防止误导销售 |
| **制造企业** | AI 办公、代码辅助 | 防止图纸/代码泄露 |
| **电商平台** | AI 营销、智能客服 | 防止虚假宣传、违规承诺 |
| **互联网公司** | AI 编程、数据分析 | 防止 API Key 泄露、代码漏洞 |

<div class="highlight" style="text-align: center;">
<strong>💰 客户价值</strong><br>
降低风险 90% &nbsp;|&nbsp; 提升效率 70% &nbsp;|&nbsp; 合规无忧 &nbsp;|&nbsp; 保护资产
</div>

---

# 实施流程

<div class="grid">
  <div class="card" style="text-align: center;">
    <h3>1️⃣ 需求沟通</h3>
    <p>了解业务场景<br>和安全需求</p>
  </div>
  
  <div class="card" style="text-align: center;">
    <h3>2️⃣ 方案设计</h3>
    <p>提供定制化<br>安全解决方案</p>
  </div>
  
  <div class="card" style="text-align: center;">
    <h3>3️⃣ POC 测试</h3>
    <p>2 周免费试用<br>验证效果</p>
  </div>
  
  <div class="card" style="text-align: center;">
    <h3>4️⃣ 正式部署</h3>
    <p>根据选择模式<br>进行部署</p>
  </div>
</div>

<div class="highlight" style="text-align: center; margin-top: 1em;">
<strong>5️⃣ 持续服务</strong>：7×24 小时技术支持
</div>

---

<!-- _class: lead -->

# 联系我们

## 🚀 开始使用 AI 安全解决方案

<div class="grid">
  <div class="card" style="text-align: center;">
    <h3>📧 邮箱</h3>
    <p style="font-size: 1.2em;">security@example.com</p>
  </div>
  
  <div class="card" style="text-align: center;">
    <h3>📱 电话</h3>
    <p style="font-size: 1.2em;">400-XXX-XXXX</p>
  </div>
  
  <div class="card" style="text-align: center;">
    <h3>🌐 网站</h3>
    <p style="font-size: 1.2em;">www.example.com</p>
  </div>
</div>

<div class="highlight" style="text-align: center; margin-top: 1.5em;">
<strong>让 AI 更安全，让业务更放心</strong>
</div>

<div class="footer">

*本方案仅供参考，具体实施需根据客户实际情况定制*

</div>
