// pages/result.js
import {keepTwoDecimal} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baipi: {
      maoliao: Number,
      zhiji: Number,
      fengpan: Number,
      ranchang: Number,
      houzheng: Number,
      fuliao: Number
    },
    sesha: {
      maoliao: Number,
      zhiji: Number,
      fengpan: Number,
      ranchang: Number,
      houzheng: Number,
      fuliao: Number
    }
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
    var app = getApp();
    var baipi = {...app.globalData.baipi};
    baipi.chengben = keepTwoDecimal(
      (baipi.maoliao+baipi.zhiji+baipi.fengpan+baipi.ranchang+baipi.houzheng+baipi.fuliao) / 12
    );
    var sesha = {...app.globalData.sesha};
    console.log('sesha = ', sesha);
    sesha.chengben = keepTwoDecimal(
      (sesha.maoliao+sesha.zhiji+sesha.fengpan+sesha.ranchang+sesha.houzheng+sesha.fuliao) / 12
    );
    var cat = app.globalData.cat;
    this.setData({
      'baipi': baipi,
      'sesha': sesha,
      'cat': cat
    });
    console.log('baipi....... ',this.data.baipi);
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