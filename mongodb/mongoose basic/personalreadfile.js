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

    // 3、only find name and author from database 
    // bookModel.find().select({name:1, author:1, _id: 0}).then(data =>{
    //     console.log('文檔查詢成功', data)
    // }).catch(err=>{
    //     console.log('文檔查詢失败', err)
    // })

    // 3、find data by sorting proce
    // bookModel.find().select({name:1, author:1, price:1, _id: 0}).sort({price: 1}).then(data =>{
    //     console.log('文檔查詢成功', data)
    // }).catch(err=>{
    //     console.log('文檔查詢失败', err)
    // })

    bookModel.find().select({name:1, author:1, price:1, _id: 0})
    .sort({price: -1})
    .limit(5).then(data =>{
        console.log('文檔查詢成功', data)
    }).catch(err=>{
        console.log('文檔查詢失败', err)
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
