// 1.install mongoose
// npm i mongoose

// 2.import mongoose
const mongoose = require('mongoose')

// set strictQuery to true
mongoose.set('strictQuery', true)

// 3.connect mongodb service
mongoose.connect('mongodb://127.0.0.1:27017/test')

// once 事件回调函数只调用一次
mongoose.connection.once('open', () => {
    console.log('連接成功')
    // new documents should be written in open section

    // 1、create document structure
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 2、create document model
    let bookModel = mongoose.model('novel', bookSchema);

    const newBook = [
        // 批量新增
        {
            name: '西游记',
            author: '吴承恩',
            price: 19.9,
        }, {
            name: '红楼梦',
            author: '曹雪芹',
            price: 29.9,
        }, {
            name: '三国演义',
            author: '罗贯中',
            price: 25.9,
        }, {
            name: '水浒传',
            author: '施耐庵',
            price: 20.9,
        }, {
            name: '活着',
            author: '余华',
            price: 19.9,
        }, {
            name: '狂飙',
            author: '徐纪周',
            price: 68,
        }, {
            name: '大魏能臣',
            author: '黑男爵',
            price: 9.9,
        },
        {
            name: '知北游',
            author: '洛水',
            price: 59,
        }, {
            name: '道君',
            author: '跃千愁',
            price: 59,
        }, {
            name: '七煞碑',
            author: '游泳的猫',
            price: 29,
        }, {
            name: '独游',
            author: '酒精过敏',
            price: 15,
        }, {
            name: '大泼猴',
            author: '甲鱼不是龟',
            price: 26,
        },
        {
            name: '黑暗王者',
            author: '古羲',
            price: 39,
        },
        {
            name: '不二大道',
            author: '文刀手予',
            price: 89,
        },
        {
            name: '大泼猴',
            author: '甲鱼不是龟',
            price: 59,
        },
        {
            name: '长安的荔枝',
            author: '马伯庸',
            price: 45,
        },
        {
            name: '命运',
            author: '蔡崇达',
            price: 59.8,
        },
        {
            name: '如雪如山',
            author: '张天翼',
            price: 58,
        },
        {
            name: '三体',
            author: '刘慈欣',
            price: 23,
        },
        {
            name: '秋园',
            author: '杨本芬',
            price: 38,
        },
        {
            name: '百年孤独',
            author: '范晔',
            price: 39.5,
        },
        {
            name: '在细雨中呼喊',
            author: '余华',
            price: 25,
        }
    ];

    // 3、操作文档-新增
    bookModel.insertMany(newBook).then(data => {
        console.log('文档新增成功', data)
    }).catch(err => {
        console.log('文档新增失败', err)

    })
})

// 5.set connection 錯誤
mongoose.connection.on('error', () => {
    console.log('連接錯誤')
})

// 6.设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})
