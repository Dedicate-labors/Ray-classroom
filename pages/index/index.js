// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    masrc:'',
    msg:""
  },

  creatma: function(e){
    console.log(e);
    console.log(this);
    this.setData({
      masrc: 'http://qr.liantu.com/api.php?&bg=ffffff&fg=cc0000&text=签到成功'
    })
  },

  saoma:function (){
    var that = this;
    wx.scanCode({
      success(res) {
        console.log(res);
        that.data.msg = res.result;
        wx.showToast({
          title: that.data.msg,
          icon: 'success',
          duration: 2000
        })
      },
      fail(){
        wx.showToast({
          title: "签到失败",
          icon: 'success',
          duration: 2000
        })
      }
    });
  },

  kejian:function(){
    wx.navigateTo({
      url: '/pages/kejian/kejian',
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