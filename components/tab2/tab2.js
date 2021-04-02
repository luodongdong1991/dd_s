Component({
  mixins: [],
  data: {        //注意我在data里加了两个属性
    Titles: '',
    InputList: ['66', '77'],
    arr2:[],
  },
  props: {          //注意我在props里加了两个接收外部数据属性
    title: '',
    InputArrayList: [],
    onMultiChoiseReasult: (data) => {
    } ,
    //把处理的值传回父页面，可以在其他方法中这样赋值  xxx(){this.props.onMultiChoiseReasult('111')}
  },
  didMount() {
    this.setData({
      arr2:this.props.InputArrayList
    })
  },
  didUpdate() { },
  didUnmount() { 
    //页面第一次记加载的时候执行；此处可以用来传函数；
  },
  methods: {
    onClick() {
      let data = {
        name:'luo',
        age:18,
      }
      //赋值；
      this.props.onMultiChoiseReasult(data);
      this.setData({                       //把props里的属性传到data里，再在axml页面里渲染出来
        InputList: this.props.InputArrayList,
        title: this.props.title,
      });
      dd.alert({
        title: '用户点击了「我知道了」',
      });
    }
  },
});

