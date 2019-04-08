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
      {
        id: 1,
        picture: 'http://wj.yhsnft.com/yhs/mw_townnews/201904/1554276562471_RGzHP.jpg',
        title: '玉皇山南金融学院第二期董秘培训班圆满落幕！',
        content: '一个人，42天，10000公里，去看想看的风景',
        date: '2019-03-31 17:30',
        address: '稻城'
      },
      {
        id: 2,
        picture: 'http://wj.yhsnft.com/yhs/mw_townnews/201903/1553847881672_hXQki.jpg',
        title: '“山南论剑”之区块链项目路演交流会顺利举行',
        content: '一个人，42天，10000公里，去看想看的风景',
        date: '2019-03-29 17:00',
        address: '稻城'
      },
      {
        id: 3,
        picture: 'http://wj.yhsnft.com/yhs/mw_townnews/201903/1553764154118_UMRkg.jpg',
        title: '提升技能，拓展视野！玉皇山南金融学院第二期董秘培训班开班啦！',
        content: '一个人，42天，10000公里，去看想看的风景',
        date: '2019-04-08',
        address: '稻城'
      },
      {
        id: 4,
        picture: 'http://wj.yhsnft.com/yhs/mw_activity/201903/1553579590799_QcMiZ.jpeg',
        title: '杭州玉皇山南基金小镇经营管理有限公司招聘需求',
        content: '一个人，42天，10000公里，去看想看的风景',
        date: '2019-04-08',
        address: '稻城'
      }
    ],
    page: 1,
    pagesize: 8
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
    this.queryDataList();
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

  },

  /**
   * 获取列表数据
   */
  queryDataList (currpage) {
    this.setData({
      page: currpage || 1
    });
    console.log(this.data)
    // wx.request({
    //   url: 'utils/dataList.json',
    //   dataType: 'json',
    //   method: 'get',
    //   success: (res) => {
    //     console.log(res.data)
    //   }
    // })
  }
})