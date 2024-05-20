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
        name: {
            type: String,
            // 设置是否必填
            // name: ValidatorError: Path `name` is required.
            required: true,
            // 是否唯一
            unique: true
        },
        author: {
            type: String,
            // 设置默认值
            default: '匿名'
        },
        price: Number,
        tages: {
            type: String,
            // 枚举
            enum: ['言情', '历史', '励志']
        }
    });

    // 2、create document model
    // book 就是集合名，mongoose 会默认加上 s,在mongodb数据库中显示的是 books
    let bookModel = mongoose.model('book', bookSchema);
    
    const newBook = {
        name: '三国演义',
        price: 199,
        tages: '励志'
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
