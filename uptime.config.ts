import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: '谐元场域 · 服务状态',
  links: [
    { link: 'https://www.ordchaos.com/', label: '谐元场域' },
  ],
  group: {
    '博客': ['blog_home'],
    '评论': ['artalk_api'],
    '统计': ['umami_heartbeat'],
    '联邦': ['gts_instance'],
  },
  customFooter: 'Powered by UptimeFlare',
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
