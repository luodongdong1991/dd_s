//page/component/form/form.js
Page({
  onReaady(){
   dd.alert({
      content: dd.corpId,
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  onSubmit2(e) {
    console.log(e,'aab')
    console.log(dd.corpId)
    dd.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset() {
    
  },
})