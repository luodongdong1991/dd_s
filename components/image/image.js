Component({
  mixins: [],
  data: {
    arr: []
  },
  props: {
    arrList: [],
  },
  didMount() {
    //初始化数据
    this.setData({
      arr: this.props.arrList
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onImage(){
      
    }
  },
});
