module.exports = {
  apps: [{
    name: 'media-sanaker',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/home/sanaker/media-website',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/sanaker/logs/media-sanaker.err.log',
    out_file: '/home/sanaker/logs/media-sanaker.out.log',
    log_file: '/home/sanaker/logs/media-sanaker.combined.log',
    time: true
  }]
};