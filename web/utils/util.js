//数据转化  
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}  
/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * n: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTime(n, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(n * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
} 

//获取新闻标题列表
function getArticles(callback,page_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Article/index',
    data: {
      page: page_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取新闻详情列表
function getArticles_detail(callback, article_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Adetail/index',
    data: {
      article_id: article_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取实力见证
function getStrength_list(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Strength/index',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取合作伙伴
function getPartner_list(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Partner/index',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取产品展示
function getExhibitionProducts(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Product/exhibition',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取新闻动态
function getUpdateArticle(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Article/update',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取产品动态
function getUpdateProduct(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Product/update',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取联系我们页面
function getContact(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Contact/index',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取产品一级分类
function getTopCate(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Category/index',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取产品二级分类
function getSecCate(callback,level_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Category/Seclevel',
    data: {
      level_id: level_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取全部产品
function getProducts(callback,page_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/Product/index',
    data: {
      page: page_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取全部分类产品
function getCateProducts(callback,cate_id,page_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/product/cate',
    data: {
      cate_id: cate_id,
      page: page_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取某一个产品
function getOneProducts(callback, product_id) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi/product/oneproduct',
    data: {
      product_id: product_id
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
//获取关于我们页面
function getChannels(callback) {
  wx.request({
    url:
    'https://www.duanzaochina.com/tp5/public/gwapi//Channels/index',
    data: {
    },
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {  //成功了
        callback(res.data);
      }
    }
  })
}
module.exports = {
  formatTime: formatTime,
  getArticles: getArticles,
  getArticles_detail: getArticles_detail,
  getStrength_list: getStrength_list,
  getPartner_list:getPartner_list,
  getExhibitionProducts: getExhibitionProducts,
  getUpdateArticle: getUpdateArticle,
  getUpdateProduct: getUpdateProduct,
  getContact: getContact,
  getTopCate: getTopCate,
  getSecCate: getSecCate,
  getProducts: getProducts,
  getCateProducts: getCateProducts,
  getChannels: getChannels,
  getOneProducts: getOneProducts
}
