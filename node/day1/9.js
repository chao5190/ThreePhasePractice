//同步和异步
//异步代码1.0
function q() {
    console.log("q");
}

function w(callback) {
    setTimeout(() => {
        console.log("w");
        // callback() 可以但不必要的操作
        setTimeout(() => {
            console.log("e");
        }, 1000)
    }, 1000)
}

q()
w()

//异步代码2.0  避免回调地狱

function e() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('e')
            resolve()
        }, 1000)
    })
}

function r() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('r')
            resolve()
        }, 2500)
    })
}

e().then(r)