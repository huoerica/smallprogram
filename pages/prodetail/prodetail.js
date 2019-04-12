// pages/prodetail/prodetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    pictures: [{
      id: 1,
      url: '/lib/media/video.mp4',
      type: 2
    }, {
      id: 2,
      url: '/lib/img/product/1.jpg',
      type: 1
    }, {
      id: 3,
      url: '/lib/img/product/2.jpg',
      type: 1
    }, {
      id: 4,
      url: '/lib/img/product/3.jpg',
      type: 1
    }],
    detail: {
      id: 1,
      name: '梨花带雨*进口新西兰',
      unit: '6.5元/斤',
      limit: 10
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      title: this.options.catename
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})