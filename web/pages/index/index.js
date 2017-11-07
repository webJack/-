//index.js
//获取应用实例
var util = require("../../utils/util.js")
const app = getApp()

Page({
  data: {
     indicatorDots: false,
     autoplay: true,
     interval: 5000,
     duration: 1000,
     time_list: [],
     time_list2:[]
  },
  to_article_detail:function(e){
    wx.navigateTo({
      url: '../article_detail/article_detail?id=' + e.currentTarget.dataset.current
    })
  },
  to_product_detail: function (e) {
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + e.currentTarget.dataset.current
    })
  },
  to_productlist:function(e){
    wx.navigateTo({
      url: '../product_detail/product_detail?id=' + e.currentTarget.dataset.current
    })
    console.log(e)
  },
  onLoad: function () {
    this.init()
  },
  init:function(){
    var that = this
    //产品展示
    util.getExhibitionProducts(function (data) {
      var data_list=[]
      for(var i=0; i<data.length;i++){
        //console.log(data[i].picpaths)
        data_list.push({ id: data[i].id, name: data[i].name, picpaths: data[i].picpaths.split(" ")[0],posttime: data[i].posttime})
      }
      //console.log(data_list)
      that.setData({
        exhibition_list: data_list
      })
      //console.log(data_list)
    })
    //新闻中心
    util.getUpdateArticle(function (data) {
      for (var i = 0; i < data.length; i++) {
        that.data.time_list.push(util.formatTime(data[i].posttime, 'Y/M/D'))
      }
      that.setData({
        update_article: data,
        gettime: that.data.time_list
      })
    })
    //实力证明
    util.getStrength_list(function(data){
      that.setData({
        strength_list: data
      })
    })
    //最新产品
    util.getUpdateProduct(function (data) {
      for (var i = 0; i < data.length; i++) {
        that.data.time_list2.push(util.formatTime(data[i].posttime, 'Y/M/D'))
      }
      that.setData({
        update_product: data,
        gettime2: that.data.time_list
      })
    })
    //合作伙伴
    util.getPartner_list(function (data) {
      that.setData({
        partner_list: data
      })
    })
  },
})
