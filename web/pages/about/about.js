// pages/about/about.js
var util = require("../../utils/util.js")
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_status: 0,
  },
  curtab:function (e) {
    //console.log(e.currentTarget.dataset.current)
    if (e.currentTarget.dataset.current === this.data.cur_status) {
      return false
    } else {
      this.setData({
        cur_status: e.currentTarget.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },
  init: function () {
    var that = this
    //公司简介
    util.getChannels(function (data) {
      var content = data[5].content
      WxParse.wxParse('company', 'html', content, that, 10)
    })
    //发展历程
    util.getChannels(function (data) {
      var content = data[13].content
      WxParse.wxParse('course', 'html', content, that, 10)
    })
    //工艺流程
    util.getChannels(function (data) {
      var content = data[12].content
      WxParse.wxParse('process', 'html', content, that, 10)

    })
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