module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
  
      // First application
      {
        name      : 'backend',
        script    : './server.js',
        watch     : true,
        instances : 1,
        exec_mode : 'cluster',
        ignore_watch: ["logs"],
        env: {
          //COMMON_VARIABLE: 'true'
          NODE_ENV: 'local',
          NODE_DEBUG: 'cluster,net,http,fs,tls,module,timers node app.js',
          //DEBUG:'express:*'
        },
        env_development : {
          NODE_ENV: 'development',
          NODE_DEBUG: 'cluster,net,http,fs,tls,module,timers node app.js',
          //DEBUG:'express:*'
        },
        env_stage : {
          NODE_ENV: 'stage',
          NODE_DEBUG: 'cluster,net,http,fs,tls,module,timers node app.js',
          //DEBUG:'express:*'
        },
        env_production : {
          NODE_ENV: 'production',
          NODE_DEBUG: 'cluster,net,http,fs,tls,module,timers node app.js',
          //DEBUG:'express:*'
        }
    }
  ],
};
