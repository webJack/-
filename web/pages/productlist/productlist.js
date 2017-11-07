// pages/productlist/productlist.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_class: 0,   //一级
    cur_class2:-1,    //二级
    cate_box_status:false,
    level_id:0,
    id_list: [],
    current_page: 1,
    last_page: 1
  },
  to_product_detail:function(e){
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + e.currentTarget.dataset.current
    })
    //console.log(e)
  },
  show: function (e) {
    //console.log(e.currentTarget.dataset.current)
    var that = this;
    var data_index = e.currentTarget.dataset.current
    if (this.data.cur_class === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        cur_class: data_index,
        cate_box_status : true
      })
    }
    //一级分类
    util.getTopCate(function (data) {
      that.data.id_list=[]
      for(var i=0; i<data.length; i++){
        that.data.id_list.push(data[i].id)
      }
      //console.log(that.data.id_list)
      that.data.level_id = that.data.id_list[data_index-1]
      //二级分类
      util.getSecCate(function (data) {
        that.setData({
          secCate: data
        })
      }, that.data.level_id)
      //所有分类产品
      that.data.current_page=1
      util.getCateProducts(function (data) {
        that.setData({
          product_list: data.data,
          current_page: that.data.current_page,
          last_page: data.last_page
        })
        //console.log(data)
      }, that.data.level_id, that.data.current_page)

    })

  },
  //点击分类名称显示该分类的产品
  show_cate:function(e){
    var that=this
    //console.log(e.currentTarget.dataset.current)
    if (that.data.cur_class2 === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        cur_class2: e.currentTarget.dataset.current
      })
    }
    util.getCateProducts(function (data) {
      that.setData({
        product_list: data.data,
        current_page: that.data.current_page,
        last_page: data.last_page
      })
      //console.log(data)
    }, e.currentTarget.dataset.current, that.data.current_page)
  },
  hideBox:function(){
    this.setData({
      cate_box_status: false
    })
  },
  showALL:function(){
    this.setData({
      cur_class: 0,
      cate_box_status: false
    })
    this.page_common()
  },

  //上一页
  prevPage: function () {
    var that = this
    //console.log(that.data.last_page)
    var page_num = that.data.current_page == 1 ? 1 : that.data.current_page - 1
    this.setData({
      current_page: page_num
    })
    if (that.data.cur_class==0){
      this.page_common()
    }
    else {
      this.cate_product()
    }
  },
  //下一页
  nextPage: function () {
    var that = this
    var page_num = that.data.current_page == that.data.last_page ? that.data.last_page : that.data.current_page + 1
    this.setData({
      current_page: page_num
    })
    if (that.data.cur_class == 0) {
      this.page_common()
    }
    else{
      this.cate_product()
    }
  },

  //首页
  firstPage: function () {
    var that = this
    this.setData({
      current_page: 1
    })
    if (that.data.cur_class == 0) {
      this.page_common()
    }
    else {
      this.cate_product()
    }
  },

  //尾页
  lastPage: function () {
    var that = this
    this.setData({
      current_page: that.data.last_page
    })
    if (that.data.cur_class == 0) {
      this.page_common()
    }
    else {
      this.cate_product()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //分页所有产品
  page_common:function(){
    var that=this
    //所有产品
    util.getProducts(function (data) {
      that.setData({
        product_list: data.data,
        last_page: data.last_page
      })
    }, that.data.current_page)
  },
  //分页该分类的所有产品
  cate_product:function(){
    var that = this//所有分类产品
    util.getCateProducts(function (data) {
      that.setData({
        product_list: data.data,
        last_page: data.last_page
      })
      //console.log(data)
    }, that.data.level_id, that.data.current_page)
  },
  onLoad: function (options) {
    this.init()
  },
  init:function(){
    var that=this
    //一级分类
    util.getTopCate(function (data) {
      that.setData({
       topCate: data
      })
    })
    util.getChannels(function (data) {
      that.setData({
        channels: data
      })
    })
    this.page_common()
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