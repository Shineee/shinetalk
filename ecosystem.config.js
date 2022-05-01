module.exports = {
  deploy: {
    dev: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/dev',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/dev/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 startOrRestart dev-server.config.js',
      'pre-setup': 'rm -rf /home/shine/web/dev/shinetalk/source',
      'post-setup': ''
    },
    pre: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/pre',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/pre/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 startOrRestart pre-server.config.js',
      'pre-setup': ''
    },
    www: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/main',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/www/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 startOrRestart www-server.config.js',
      'pre-setup': ''
    }
  }
};
