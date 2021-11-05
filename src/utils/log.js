const install = app => {
    app.config.globalProperties.$log = (str) => {
      console.log(str)
  }
  }
  
  export { install as default };