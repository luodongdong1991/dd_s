Page({
  data:{
    imageSrc:'',
    text:'click',
    title:'name luo',
    arr:[
      {name:'blt',age:18},
      {name:'jimi',age:19},
    ],
    view:'dingtalk',
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    //测试父子传值；
    CounterPlusOne:['1111','22','44','333'],
  },
  //预览图片；
  previewImage(){

  },
  //查看图
  checkImage(){
    let src = 'https://www.fastmock.site/mock/82cea11bd2d4bff810d00d53009b332c/test/api/goods#!method=POST&queryParameters=%5B%5D&body=&headers=%5B%5D'
    dd.httpRequest({
      url: src,
      method: 'POST',
      data: {
      },
      dataType: 'json',
      success: function(res) {
        console.log(res,'667')
        dd.alert({
          content: JSON.stringify(res)
      });
      },
      fail: function(res) {
        //dd.alert({content: 'fail'});
      },
      complete: function(res) {
        //dd.alert({content: 'complete'});
      }
    });
    let _this = this;
    // dd.chooseImage({
    //   count: 2,
    //   //返回一个对象
    //   success: (res) => {
    //       console.log(res,'667')
    //       _this.setData({
    //          imageSrc:res.filePaths[0],
    //       })
    //       dd.alert({ 
    //           title: '选中的图片',
    //           content: JSON.stringify(res.filePaths)
    //       })
    //   },
    // });
  },
  showMsg(){
    alert('you had click me')
  },
  //传回来的；
  onMultiChoiseReasult(data) {
    console.log("传值成功")
    console.log(data)
  },
  changeText(e){
    console.log(getCurrentPages(),'12')
    console.log(e.target.targetDataset.op);
    this.setData({
      text:'change end'
    })
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
    alert('closethispage')
  },
  onTitleClick() {
    // 标题被点击
    alert('title')
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
