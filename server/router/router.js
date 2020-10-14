//路由层

//导入路由控制器
const routerController = require(__basename + '/router_controller/routerController.js');

module.exports = app => {
  app.post("/createData", routerController.createData)
  app.post("/updateData", routerController.updateData)
  app.post("/findAllData", routerController.findAllData)
}
// 导出方法