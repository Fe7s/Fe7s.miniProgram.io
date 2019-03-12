// pages/weatherCities/weatherCities.js
// 查询能查询的地区、城市数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://v.juhe.cn/historyWeather/citys',
      data:{
        province_id:options.id,
        key:'0b218699fe61b0e3c79bb4e782cd1420',
      },
      success:function(res){
        console.log(res);
        that.setData({
          result: res.data.result,
        })
      }
      
    })
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