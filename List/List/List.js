// pages/list/list.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { title: "皮城女警商城", describe: "皮城女警的商城页面，用来模仿一个交易物品展示的页面", url: "../CaitlynMarket/CaitlynMarket" },
      {title: "昨天天气查询", describe: "预报接口收费，用查询历史的接口，所以只能查询当天之前的，这里默认查询昨天的，免费次数也有限制，流量就是money啊！！", url:"../weather/weatherProvince/weatherProvince"},
      { title: "小说简介", describe: "简单的介绍小说", url: "../novel/novelList/novelList"},
      { title: "占位2", describe: "占位3", url: ""},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.list);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})