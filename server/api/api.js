//服务层

class API {
  createData(modelName, obj) {
    //modelName: 模型名称, string
    //obj: 创建的数据, object
    return model[modelName].create(obj);
  }
  //添加数据 返回promise

  updateData(modelName, obj, where) {
    //modelName: 模型名称, string
    //obj: 创建的数据, object
    // where: 查询条件
    return model[modelName].update(obj, {
      where
    });
  }
  //更新数据 无配置

  findAllData(modelName, where, attributes, offset = 0, limit, order = ["id"]){
    //modelName: 模型名称, string
    //where: 查询条件, object
    //attributes: 查询字段, array
    // order: 排序依据, array
    // limit: 查询数量 number
    // offset 结果偏移量 number
    
    return model[modelName].findAll({
      where,
      attributes,
      order,
      offset,
      limit: 3
    })
  }
  //查询数据 返回promiseu

  count(modelName, condition) {
    //modelName:  模型名称, string
    //condition: 条件, object
    return model[modelName].count({
      where: condition
    });
  }
  //查询数据表的记录数
}
// 数据的增删改方法

module.exports = new API();