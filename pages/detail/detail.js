// pages/detail.js
import {keepTwoDecimal} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cat: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    banyiWeight: Number,
    costTime: Number,
    maoliaoUnit: Number,
    zhijiUnit: Number,
    fengpanUnit: Number,
    ranchangUnit: Number,
    houzhengUnit: Number,
    fuliaoUnit: Number
  },

  /**
   * 组件的方法列表
   */
  methods: {
    caculateMaopi: function() {
      var banyiWeight = typeof this.data.banyiWeight != 'function' ? this.data.banyiWeight : 0;
      var costTime = typeof this.data.costTime != 'function' ? this.data.costTime : 0;
      var maoliaoUnit = typeof this.data.maoliaoUnit != 'function' ? this.data.maoliaoUnit : 0;
      var zhijiUnit = typeof this.data.zhijiUnit != 'function' ? this.data.zhijiUnit : 0;
      var fengpanUnit = typeof this.data.fengpanUnit != 'function' ? this.data.fengpanUnit : 0;
      var ranchangUnit = typeof this.data.ranchangUnit != 'function' ? this.data.ranchangUnit : 0;
      var houzhengUnit = typeof this.data.houzhengUnit != 'function' ? this.data.houzhengUnit : 0;
      var fuliaoUnit = typeof this.data.fuliaoUnit != 'function' ? this.data.fuliaoUnit : 0;
      var maoliao = keepTwoDecimal(banyiWeight*maoliaoUnit*12*1.05/1000000);
      var zhiji = keepTwoDecimal(costTime*zhijiUnit/115);
      var fengpan = keepTwoDecimal(fengpanUnit);
      var ranchang = keepTwoDecimal(banyiWeight*ranchangUnit*33/1250);
      var houzheng = keepTwoDecimal(houzhengUnit*12);
      var fuliao = keepTwoDecimal(fuliaoUnit*12);
      var app = getApp();
      app.globalData.baipi = {
        maoliao,
        zhiji,
        fengpan,
        ranchang,
        houzheng,
        fuliao
      };
      app.globalData.cat = 'baipi';
      this.jumpResult();
    },
    caculateSesha: function() {
      var banyiWeight = typeof this.data.banyiWeight != 'function' ? this.data.banyiWeight : 0;
      var costTime = typeof this.data.costTime != 'function' ? this.data.costTime : 0;
      var maoliaoUnit = typeof this.data.maoliaoUnit != 'function' ? this.data.maoliaoUnit : 0;
      var zhijiUnit = typeof this.data.zhijiUnit != 'function' ? this.data.zhijiUnit : 0;
      var fengpanUnit = typeof this.data.fengpanUnit != 'function' ? this.data.fengpanUnit : 0;
      var ranchangUnit = typeof this.data.ranchangUnit != 'function' ? this.data.ranchangUnit : 0;
      var houzhengUnit = typeof this.data.houzhengUnit != 'function' ? this.data.houzhengUnit : 0;
      var fuliaoUnit = typeof this.data.fuliaoUnit != 'function' ? this.data.fuliaoUnit : 0;
      var maoliao = keepTwoDecimal(banyiWeight*maoliaoUnit*12*1.2/1000000);
      var zhiji = keepTwoDecimal(costTime*zhijiUnit/115);
      var fengpan = keepTwoDecimal(fengpanUnit);
      var ranchang = keepTwoDecimal(banyiWeight*ranchangUnit*33/1250);
      var houzheng = keepTwoDecimal(houzhengUnit*12);
      var fuliao = keepTwoDecimal(fuliaoUnit*12);
      console.log('.... ', maoliao);
      var app = getApp();
      app.globalData.sesha = {
        maoliao,
        zhiji,
        fengpan,
        ranchang,
        houzheng,
        fuliao
      };
      app.globalData.cat = 'sesha';
      this.jumpResult();
    },
    jumpResult: function() {
      wx.navigateTo({
        url: '../result/result'
      });
    }
  },


})
