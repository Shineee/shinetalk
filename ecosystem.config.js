module.exports = {
  deploy: {
    dev: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/dev',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/dev/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run dev',
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
      'post-deploy': 'npm install && npm run pre',
      'pre-setup': 'rm -rf /home/shine/web/pre/shinetalk/source',
    },
    www: {
      user: 'shine',
      host: 'shinetalk.wang',
      ref: 'origin/main',
      repo: 'git@github.com:Shineee/shinetalk.git',
      path: '/home/shine/web/www/shinetalk',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run www',
      'pre-setup': 'rm -rf /home/shine/web/www/shinetalk/source',
    }
  }
};
