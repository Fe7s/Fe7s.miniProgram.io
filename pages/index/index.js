//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'1',
    city_name:{},
    day_temp:{},
    day_weather:{},
    day_wind:{},
    day_wind_comp:{},
  },
  getCityId:function(event){
    this.setData({
      id:event.detail.value
    })
    this.getResult()
  },

  getResult:function(){
    let that = this;
    var day = new Date();
    day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
    var today = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
    wx.request({
      url: 'http://v.juhe.cn/historyWeather/weather',
      data:{
        key:'0b218699fe61b0e3c79bb4e782cd1420',
        weather_date:today,
        city_id:that.data.id
      },
      success:function(res){
        console.log(res)
        that.setData({
          city_name:res.data.result.city_name,
          day_temp:res.data.result.day_temp,
          day_weather:res.data.result.day_weather,
          day_wind:res.data.result.day_wind,
          day_wind_comp:res.data.result.day_wind_comp,
        }) 
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getResult();
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