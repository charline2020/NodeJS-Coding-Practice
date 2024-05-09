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
        price: Number, 
        isHot: Boolean,
        tages: Array,
        publishTime: Date,
        test: mongoose.Schema.Types.Mixed
    });

    // 2、create document model
    // book 就是集合名，mongoose 会默认加上 s,在mongodb数据库中显示的是 books
    let bookModel = mongoose.model('book', bookSchema);
    
    const newBook = {
        name: '西游记',
        author: '吴承恩',
        price: 19,
        isHot: true,
        tages: ['玄幻', '鬼怪', '逆天'],
        publishTime: new Date(),
        test: new Date()
    };
   
    // 3、操作文档-新增
    bookModel.create(newBook).then(data =>{
        console.log('文档新增成功', data)
    }).catch(err=>{
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
