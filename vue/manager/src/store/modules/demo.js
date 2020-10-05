export default {
    namespaced: true,
    // 成为带命名空间的模块
    state: () => ({
        objTypeTwoWayBindDemo: {
            text: '对象类型双向绑定示例'
        },
        // 对象类型双向绑定示例
        baseTypeTwoWayBindDemo: '基础数据类型双向绑定示例',
        // 基础数据类型双向绑定示例

        msgShow: null,
        // msg是否展示
        msgText: 'msgText组件文字',
        // msgText组件文字
        // BaseMsg组件

        validTestData: {
            emailDemo: {
                reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                msg: '邮箱格式不正确'
            }
        }
        // 有效性测试
    }),
    mutations: {
        twoWayBind(state, {
            key,
            value,
            name
        }) {
            if (key) {
                state[name][key] = value
            } else {
                state[name] = value
            }
        },
        // key: 对象类型的属性
        // name: state属性
        // value: 输入内容
        // 双向绑定
        toggleStatus(state, {
            key
        }) {
            state[key] = !state[key]
        },
        // 切换状态

        validTest() {
            //验证通过返回true, 否则返回false
            //o: 验证表单数据, object

            for (let key in o) {
                if (!this.data[key].reg.test(o[key])) {
                    return {
                        pass: false,
                        msg: this.data[key].msg
                    };
                }
            }

            return true;
        }
        // 有效性测试
    },
    // 接收的第一个参数是模块的局部state
    actions: {

    },
    // 第一个参数context 常用对象结构 { dispatch, commit, getters, rootGetters }
    // 第二个参数 payload载荷
    getters: {

    }
    // 第一个参数: 模块的局部state
    // 第二个参数: 模块的getter
    // 第三个参数: 根节点state
    // 第四个参数: 根节点getter

}