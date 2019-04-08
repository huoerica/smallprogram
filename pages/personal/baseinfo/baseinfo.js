// pages/personal/baseinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      name: 'herica',
      sex: null,
      like: null,
      birth: '',
      address: ''
    },
    address: []
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

  },
  /**
  * 日期选择空间
  */
  bindDateChange(e) {
    console.log('picker:日期', e.detail.value)
    this.setData({
      formData: {
        birth: e.detail.value
      }
    })
  },
  /**
   * 省市区
   */
  bindRegionChange(e) {
    console.log('picker:省市区', e.detail)
    this.setData({
      address: e.detail.value
    });
  }
})