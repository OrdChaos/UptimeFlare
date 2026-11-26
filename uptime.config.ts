import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: '谐元场域 · 服务状态',

  // 浏览器标签页图标
  // 如果已经放了 public/favicon.svg，改成 '/favicon.svg?v=1'
  favicon: 'https://www.ordchaos.com/img/icons/svg.svg',

  // 导航栏 Wordmark
  logo: '/logo.svg?v=2',

  links: [
    { link: 'https://www.ordchaos.com/', label: '主站' },
  ],

  group: {
    '博客': ['blog_home'],
    '评论': ['artalk_api'],
    '统计': ['umami_heartbeat'],
    '联邦': ['gts_instance'],
  },

  customFooter: `
    <style>
      .uf-footer {
        max-width: 720px;
        margin: 0 auto;
        padding: 18px 16px 10px;
        text-align: center;
      }

      .uf-footer a {
        text-decoration: none;
        border-bottom: 1px solid;
        transition: opacity 0.15s ease;
      }

      [data-mantine-color-scheme='light'] .uf-footer a {
        color: #3f6b5f;
        border-bottom-color: rgba(63, 107, 95, 0.28);
      }

      [data-mantine-color-scheme='dark'] .uf-footer a {
        color: #8fc7b8;
        border-bottom-color: rgba(143, 199, 184, 0.3);
      }

      .uf-footer a:hover {
        opacity: 0.7;
      }

      .uf-footer .brand {
        font-weight: 600;
        letter-spacing: 0.06em;
        color: var(--mantine-color-text);
      }

      .uf-footer .sep {
        color: var(--mantine-color-dimmed);
        opacity: 0.4;
      }

      .uf-footer .meta {
        margin-top: 8px;
        font-size: 11px;
        color: var(--mantine-color-dimmed);
        opacity: 0.75;
      }
    </style>

    <div class="uf-footer">
      <div style="display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; font-size:13px;">
        <span class="brand">谐元场域 · 状态监控</span>
        <span class="sep">/</span>
        <a href="https://www.ordchaos.com/" target="_blank" rel="noopener noreferrer">主站</a>
      </div>
      <div class="meta">
        由 <a href="https://github.com/lyc8503/UptimeFlare" target="_blank" rel="noopener noreferrer">UptimeFlare</a> 驱动 · 独立于主站运行
      </div>
    </div>
  `,
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,

  monitors: [
    {
      id: 'blog_home',
      name: '谐元场域',
      method: 'GET',
      target: 'https://www.ordchaos.com/',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '谐元场域',
      statusPageLink: 'https://www.ordchaos.com/',
    },
    {
      id: 'artalk_api',
      name: 'Artalk',
      method: 'GET',
      target: 'https://comment.ordchaos.com/api/v2/conf',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'frontend_conf',
      statusPageLink: 'https://comment.ordchaos.com/',
    },
    {
      id: 'umami_heartbeat',
      name: 'Umami',
      method: 'GET',
      target: 'https://analysis.ordchaos.com/api/heartbeat',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '"ok":true',
      statusPageLink: 'https://analysis.ordchaos.com/',
    },
    {
      id: 'gts_instance',
      name: 'GoToSocial',
      method: 'GET',
      target: 'https://social.ordchaos.com/api/v1/instance',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '"uri":"social.ordchaos.com"',
      statusPageLink: 'https://social.ordchaos.com/',
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }