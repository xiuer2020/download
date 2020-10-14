//路由控制器层

let api = require(__basename + '/api/api.js');
//导入api(服务)层，操作数据库

const {
    Op
} = require("sequelize");
class RouterController {
    createData(req, res) {
        api.createData("Demo", {
            demo: "buildData"
        }).then(() => {
            res.send({
                msgText: "创建数据成功"
            })
        });

    }
    updateData(req, res) {
        let id = req.body.id;
        let arr = api.updateData("Demo", {
            demo: "updateData"
        }, {
            id
        })
        res.send(arr)
    }
    findAllData(req, res) {
        api.findAllData("Demo", {
            id: {
                [Op.gt]: 1
            }
        }).then(result => {
            console.log("result ==> ", result);
            res.send(result)
        })

    }
}


module.exports = new RouterController();
//导出请求回应实例