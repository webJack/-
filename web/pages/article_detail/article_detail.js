// pages/article_detail/article_detail.js
var util = require("../../utils/util.js")
var WxParse = require('../../wxParse/wxParse.js');
Page({
  onShareAppMessage: function (res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '锻件文章',
      path: '/pages/article_detail/article_detail?id=' + this.data.article_id,
      success: function (res) {
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '转发失败',
          duration: 1500
        })
      }
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    article_id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.article_id = options.id
    this.init()
  },
  init: function () {
    var that = this
    var article_id = this.data.article_id
    util.getArticles_detail(function (data) {
      var time = []
      for (var i = 0; i < data.length; i++) {
        time.push(util.formatTime(data[i].posttime, 'Y/M/D h:m:s'))
      }
     
      that.setData({
        getArticles_detail: data,
        gettime:time
      })
      WxParse.wxParse('detail', 'html', data[1].content, that, 10)
    }, article_id)

    wx.showShareMenu({
      withShareTicket: true
    })
  }, onShow(e) {
    wx.showShareMenu({
      withShareTicket: true
    })

    
  },
  prev_detail:function(e){
    var that = this
    util.getArticles_detail(function (data) {
      var time = []
      for (var i = 0; i < data.length; i++) {
        time.push(util.formatTime(data[i].posttime, 'Y/M/D h:m:s'))
      }

      that.setData({
        getArticles_detail: data,
        gettime: time
      })
      WxParse.wxParse('detail', 'html', data[2].content, that, 10)
    }, e.currentTarget.dataset.current)
    that.setData({
      scrollTop: 0
    })
  },
  next_detail: function (e) {
    var that = this
    util.getArticles_detail(function (data) {
      var time = []
      for (var i = 0; i < data.length; i++) {
        time.push(util.formatTime(data[i].posttime, 'Y/M/D h:m:s'))
      }

      that.setData({
        getArticles_detail: data,
        gettime: time
      })
      WxParse.wxParse('detail', 'html', data[0].content, that, 10)
    }, e.currentTarget.dataset.current)
    that.setData({
      scrollTop: 0
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