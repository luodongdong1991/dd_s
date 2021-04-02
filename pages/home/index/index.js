Page({
  data: {
    //banner
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: true,
    //list
    list:[
      {
        title:'采购模块',
        minTitle:'新建验货需求'
      },
      {
        title:'品质模块',
        minTitle:'编辑验货报告'
      }
    ]
  },
  onLoad() {
  },
  
  
});
