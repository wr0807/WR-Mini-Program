App({
  /*生命周期函数（会在后台存活两个小时）*/
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成:onLaunch')
   
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * (就是当页面加载完成后执行的生命周期函数)
   */
  onShow: function (options) {
    console.log(options.scene)
    //1.判断小程序进入场景
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    
    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序关闭后触发:onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误后执行:onError')
  }
})
