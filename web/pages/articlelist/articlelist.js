// pages/articlelist/articlelist.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time_list:[],
    current_page:1,
    last_page:1
  },
  to_article_detail:function(e){
    wx.navigateTo({
      url: '../article_detail/article_detail?id=' + e.currentTarget.dataset.current
    })
    console.log(e)
  },
  //上一页
  prevPage: function () {
    var that = this
    //console.log(that.data.last_page)
    var page_num = that.data.current_page == 1 ? 1 : that.data.current_page - 1
    this.setData({
      current_page: page_num
    })
    this.page_common()
  },
  //下一页
  nextPage:function(){
    var that=this
    var page_num = that.data.current_page == that.data.last_page ? that.data.last_page : that.data.current_page + 1
    this.setData({
      current_page: page_num
    })
    this.page_common()
  },

  //首页
  firstPage:function(){
    var that = this
    this.setData({
      current_page: 1
    })
    this.page_common()
  },

  //尾页
  lastPage: function () {
    var that = this
    this.setData({
      current_page: that.data.last_page
    })
    this.page_common()
  },
  //分页的公共函数
  page_common:function(){
    var that = this
    util.getArticles(function (data) {
      that.data.time_list=[]
      for (var i = 0; i < data.data.length; i++) {
        that.data.time_list.push(util.formatTime(data.data[i].posttime, 'Y/M/D h:m:s'))
      }
      console.log(that.data.time_list)
      that.setData({
        article_list: data.data,
        gettime: that.data.time_list,
        last_page: data.last_page
      })
      //console.log(data.data)
    }, that.data.current_page)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },
  init: function () {
    var that=this
    this.page_common()
    util.getChannels(function (data) {
      that.setData({
        channels: data
      })
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