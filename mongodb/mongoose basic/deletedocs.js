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

    // // 3、操作文档-删除
    // bookModel.deleteOne({id: '663d1fcc92979e2fbba16afc'}).then(data => {
    //     console.log('删除文档成功', data)
    // }).catch(err => {
    //     console.log('删除文档失败', err)

    // })

    // // 3、批量删除
    bookModel.deleteMany({price: '59'}).then(data => {
        console.log('删除文档成功', data)
    }).catch(err => {
        console.log('删除文档失败', err)

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
