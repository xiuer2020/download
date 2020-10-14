class ValidTest {
    constructor() {
        this.data = {
            demo: {
                reg: /\d/,
                msgText: "验证的数据中不含数字"
            }
            // 含有数字
        }
    }
    test(obj) {
        console.log('o ==> ', obj);
        for (let key in obj) {
            if (!this.data[key].reg.test(obj[key])) {
                return {
                    pass: false,
                    msgText: this.data[key].msgText
                }
            }
        }
        return true
    }
    // 参数类型: 对象 其属性必须是实例属性
    //验证通过返回true, 否则返回一对象 含通过状态属性: pass 提示文字: msg
}
export default new ValidTest();
// 导出实例