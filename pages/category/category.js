// pages/category/category.js
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    category: [{
        catename: '果味',
        banner: '/lib/img/pic/4.jpg',
        list: [{
            catename: '梨花带雨',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '春生龙眼',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '夏日芒果',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '冬木红枣',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '万紫千凤梨',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '贵妃笑',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '珍奇异果',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '红衣青瓜',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
        ]
      },
      {
        catename: '蔬菜',
        banner: '/lib/img/pic/4.jpg',
        list: [{
            catename: '芹菜',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '泥蒿',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '西虹市',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '土豆',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '青椒',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          }
        ]
      },
      {
        catename: '炒货',
        banner: '/lib/img/pic/4.jpg',
        list: [{
            catename: '油炸花生',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '春泥西瓜子',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '碧水葵花籽',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '釉色瓜子',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '春泥花生',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          }
        ]
      },
      {
        catename: '点心',
        banner: '/lib/img/pic/4.jpg',
        list: [{
            catename: '小红的猪耳朵',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '梅兰青花糕',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '清凉薄荷糕',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '小明的妙脆角',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          }
        ]
      },
      {
        catename: '粗茶',
        banner: '/lib/img/pic/4.jpg',
        list: [{
            catename: '红柚枸杞',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '碧螺春',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '西湖龙井',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '大红袍',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          },
          {
            catename: '信阳毛尖',
            number: 5,
            picture: '/lib/img/pic/9.jpg',
            urldir: ''
          }
        ]
      }
    ],
    currcate: 0,
    autoplay: false
  },
  changeCate: function(e) {
    console.log(e.target.dataset.index);
    this.setData({
      currcate: e.target.dataset.index
    });
  },
  catchTouchMove (event) {
    return false;
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