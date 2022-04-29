module.exports = {
  apps: [{
    script: 'dev-server.js',
    watch: '.'
  }, {
    script: 'pre-server.js',
    watch: '.'
  }, {
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
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    pre: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/pre',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/pre/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env pre',
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
