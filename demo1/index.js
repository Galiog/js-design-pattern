// #简单工厂模式第一种
/**
 * 足球类
 */
// var FootBall = function  () {
//     this.play = function () {
//         console.log('我在踢足球');
//     }
// }

/**
 * 篮球类
 */
// var BasketBall = function  () {
//     this.play = function () {
//         console.log('我在打篮球');
//     }
// }

// var football = new FootBall();
// football.play();
// var basketball = new BasketBall();
// basketball.play();

/**
 * 球类工厂
 */
// var Ball = function(name) {
//     switch (name) {
//         case '足球':
//             return new FootBall();
//         break;
//         case '篮球':
//             return new BasketBall();
//         break;
//     }
// }
// var football =  Ball('足球');
// football.play();
// var basketball =  Ball('篮球');
// basketball.play();

// #简单工厂模式第一种end

// #简单工厂模式第二种

/**
 * 球类工厂
 */
// var Ball = function(name) {
//     // 创建一个对象,对对象扩展扩展属性还有方法
//     var o = new Object();
//     o.name = name;
//     //默认的方法 如果在加上一个羽毛球类,这时候就不需要补充play方法
//     o.play = function () {
//         console.log('我在打'+name);
//     }
//     if (name === '足球') {
//         o.play = function () {
//             console.log('我在踢'+name);
//         }
//     }else if (name === '篮球') {
//         o.play = function () {
//             console.log('我在打'+name);
//         }
//     }
//     // 将对象返回
//     return o;
// }
// var football =  Ball('足球');
// football.play();
// var basketball =  Ball('篮球');
// basketball.play();

// #简单工厂模式第二种end



// # 工厂方法模式
// 安全模式创建工厂类
var Ball = function (type,name) {
    /**
     * 安全模式 Ball也可以运行处new Ball的效果
     */
    if(this instanceof Ball) {
        var s = new this[type](name);
        return s;
    }else {
        return new Ball(type,name);
    }
}
// 工厂原型中设置创建所有类
Ball.prototype = {
    basketBall: function(name) {
        this.play = function() {
            console.log('我在打'+name);
        }
    },
    footBall: function(name) {
        this.play = function() {
            console.log('我在踢'+name);
        }
    },
    badmintonBall: function(name) {
        this.play = function() {
            console.log('我在打'+name);
        }
    },
    // ....
}
var football = new Ball('footBall','足球');
football.play();
var basketball = new Ball('basketBall','篮球');
basketball.play();
var badmintonball = new Ball('badmintonBall','羽毛球');
badmintonball.play();

// # 工厂方法模式end
