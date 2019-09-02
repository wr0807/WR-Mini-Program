Page({
   //------------------------2.初始化一些数据-----------------------------------
  data: {
    name: 'wangrui',
    age: 18,
    students: [{
        id: 132,
        name: 'wangsui',
        age: 24
      },
      {
        id: 123,
        name: 'wangdfs',
        age: 14
      },
      {
        id: 150,
        name: 'wangsfi',
        age: 34
      },
      {
        id: 230,
        name: 'wasfssi',
        age: 64
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    // console.log("点击事件")
    //1.错的做法点击后页面不会显示改变的内容
    // this.data.counter += 1,
    // console.log(this.data.counter)
    //2.用setData方法
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //---------------------1.监听页面的生命周期函数----------------------
  //页面被加载出来
  onLoad() {

  },
  //页面被显示出来
  onReady() {

  },
  //页面初次渲染完成
  onShow() {

  },
  //当页面隐藏起来时
  onHide() {

  },
  onUnload() {

  },
 

  //--------------------------3.监听wxml中相关的一些事件--------------------------
  handleGetUserInfo(event) {
    console.log(event)
  },
  //--------------------------3.监听其它事件--------------------------
  //监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  //监听页面有没有滚动到底部
  onReachBottom(){
    console.log('页面滚动到了底部')
  },
  //监听页面下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})