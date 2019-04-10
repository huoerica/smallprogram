// components/myfirst/myfirst.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value',
      // observer: function () {
      //   // 属性值被更改时的响应函数
      //   console.log('observer')
      // }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件数据字段监听器
   */
  observers: {
    'innerText': function(){
      console.log('observers: innerText');
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod() {
      console.log(this.innerText);
    },
    setInnerText() {
      console.log("修改前："+ this.data.innerText);
      this.setData({
        innerText: 'already Edited'
      });
      console.log("修改后：" + this.data.innerText);
    }
  }
})