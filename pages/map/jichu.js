// pages/map/jichu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jingdu:"",
    weidu:"",
    dizhi:"",
    mingcheng:"",
    xd_wz: { latitude: 30.82404, longitude: 104.15801}
  },
  huodeweizhi:function(){
    var that =this
    wx.getLocation({
      success: function(res) {
        console.log(res) 
        that.setData({
          jingdu: res.longitude,
          weidu:res.latitude
        })
      },
    })
  },
  chakanweizhi:function(e){
    console.log("表单提交了")
    console.log("经度:"+e.detail.value.jingdu)
    console.log("纬度:" + e.detail.value.weidu)
    wx.openLocation({
      latitude: Number(e.detail.value.weidu),
      longitude: Number(e.detail.value.jingdu)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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