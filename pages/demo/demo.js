// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      coordinate: { },
      detail: {}    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      // wx.getLocation({
      //     type: 'wgs84',
      //     success: (res) => {
      //         var locate = { latitude: res.latitude, longitude: res.longitude };
      //         this.setData({
      //             coordinate: locate
      //         });
      //         var latitude = res.latitude // 纬度
      //         var longitude = res.longitude // 经度

      //         console.log(this.data);
      //     }
      // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: () => {
    wx.request({
      url: 'http://yhsnft.com/townview/findviews', // 仅为示例，并非真实的接口地址
      data: {
        page: 1,
        pagesize: 8
      },
      dataType: 'json',
      method: 'post',
      responseType: 'text',
      success: (res) => {
        console.log(res)
        console.log(this)
      }
    })
  
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