module.exports = {
  apps: [{
    name: "dev.shinetalk.wang",
    script: 'dev-server.js',
    watch: '.'
  }, {
    name: "pre.shinetalk.wang",
    script: 'pre-server.js',
    watch: '.'
  }, {
    name: "www.shinetalk.wang",
    script: 'www-server.js',
    watch: '.'
  }],

  deploy: {
    dev: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/dev',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/dev/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js',
      'pre-setup': 'rm -rf /home/shine/web/dev/shinetalk/source'
    },
    pre: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/pre',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/pre/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js',
      'pre-setup': ''
    },
    www: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/main',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/www/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env www',
      'pre-setup': ''
    }
  }
};
