'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  const wechat = app.middlewares.wechat({
    token: '8ggtoken',
    appid: 'wx4b4a57d4c50d4301',
    encodingAESKey: 'hp4a8rCuOS7d1o1zrO61ZhlKM6BM4wGtUtKRiWukzqx'
  });
  router.get('/wechat', wechat);
  router.post('/wechat', wechat);
};