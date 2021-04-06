Component({
  mixins: [],
  data: {},
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    //设置
    setLocal() {
      dd.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: function () {
          dd.alert({ content: '写入成功' });
        }
      });
    },
    //获取
    getLocal() {
      dd.getStorage({
        key: 'currentCity',
        success: function (res) {
          //dd.alert({ content: '获取成功：' + res.data.cityName });
          dd.alert({ content: '获取成功：' + res.data });
          console.log(res);
        },
        fail: function (res) {
          dd.alert({ content: res.errorMessage });
        }
      });
    },
    //删除
    removeLocal() {
      dd.removeStorage({
        key: 'currentCity',
        success: function(){
          dd.alert({content: '删除成功'});
        }
      });
    }
  },
});
