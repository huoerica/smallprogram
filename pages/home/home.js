// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        img: 'https://n2-q.mafengwo.net/s13/M00/CE/AA/wKgEaVyoRFmAe98mAAt_u1qVekM56.jpeg?imageMogr2%2Finterlace%2F1',
        content: '一个人，42天，10000公里，去看想看的风景',
        date: '2019/4/8'
      },
      {
        url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        img: 'https://n4-q.mafengwo.net/s13/M00/3B/55/wKgEaVynYlWANqbWAA5VsGMYJWE13.jpeg?imageMogr2%2Finterlace%2F1',
        content: '四月花见，发现东京周边春日小众秘境',
        date: '2019/4/6'
      },
      {
        url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        img: 'https://n2-q.mafengwo.net/s13/M00/BD/BD/wKgEaVyoOK6AJk_nAASiDMquVBs33.jpeg?imageMogr2%2Finterlace%2F1',
        content: '讲一个生活在-30℃北极圈的故事「漫画微电影」',
        date: '2019/4/7'
      },
      {
        url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        img: 'https://n4-q.mafengwo.net/s13/M00/3B/55/wKgEaVynYlWANqbWAA5VsGMYJWE13.jpeg?imageMogr2%2Finterlace%2F1',
        content: '四月花见，发现东京周边春日小众秘境',
        date: '2019/4/6'
      }
    ],
    dataList: [
      []
    ],
    page: 1,
    pagesize: 6,
    freshStatus: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(this.data.page);
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
    wx.showNavigationBarLoading();
    this.initDataList(1, "top");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('sjdhjshd');
    let page = this.data.page;
    this.initDataList(page + 1, "bottom");
    this.setData({
      page: ++page
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 生成数据
   */
  initDataList(page, refreshDir) {
    if (refreshDir === 'top') {
      // 下拉刷新
      wx.showNavigationBarLoading();
    } else {
      // 上拉刷新
      wx.showLoading({
        title: '加载中',
      });
    }
    let data = [];
    for (let i = 0; i < this.data.pagesize; i++) {
      data.push({
        id: this.data.pagesize * page + i,
        picture: '/lib/img/pic/8.jpg',
        title: '商品-' + (this.data.pagesize * (page - 1) + i + 1),
        weight: '100g',
        price: '12',
        date: '2019-03-31 17:30'
      });
    }

    setTimeout(() => {
      if (refreshDir === 'top') {
        // 下拉刷新
        wx.hideNavigationBarLoading();
      } else {
        // 上拉刷新
        wx.hideLoading();
      }

      this.setData({
        ['dataList[' + (page - 1) + ']']: data
      })
      console.log(this.data.dataList);
      wx.stopPullDownRefresh();
    }, 3000);
  }
})