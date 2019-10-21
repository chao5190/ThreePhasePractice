class Observer {
    constructor() {
        this.list = {};
    }
    //用于存储回调函数，key为回调函数数组的名字
    on(key, fn) {
        if (!this.list[key]) { //如果名为“key”的回调函数数组不存在，则创建
            this.list[key] = [];
        }
        this.list[key].push(fn); //存在就加入新的函数
    }
    //调用回调函数数组的函数
    emit(key, param) {
        let fns = this.list[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(fn => {
            fn(param); //传入参数调用回调数组
        });
    }
}

export default new Observer()