/**
 * Created by mengna on 2017/11/21.
 */
var vm = new Vue({
    el: '#app',
    data: {
        people: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }, {
            name: 'Tracy',
            age: 22,
            sex: 'Female'
        }, {
            name: 'Chris',
            age: 36,
            sex: 'Male'
        }]
    }
});
var vm1 = new Vue({
    el: '#app1',
    data: {
        activeNumber: 1,
        pageCount: 10
    }
});

//两个this指的是相同的数据
var vm2 = new Vue({
    el: '#app2',
    data: {
        message: 'Hello test'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function() {
            console.log(this);
            //方法内 `this` 指向 vm
            console.log(this.message)
        },
        say: function(msg) {
            console.log(this);
            console.log(msg)
        }
    }
});

var vm3 = new Vue({
    el: '#total',
    data: {
        newperson:{
            name:"",
            age:1,
            sex:"female"
        },
        persons:[
            {
                name:"aa",
                age:30,
                sex:'female'
            },
            {
                name:"bb",
                age:32,
                sex:'male',
            }
            ]
    },
    methods: {
        addperson: function() {
            console.log(this);
            this.persons.push(this.newperson);
            this.newperson = {"name":"","age":1,"sex":"female"};
        },
        deletePerson: function(person,index){
            console.log(this);
            // 删一个数组元素
            this.persons.splice(index,1);
        }
    }
});



















