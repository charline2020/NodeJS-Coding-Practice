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

    // 3、find price less than $40 
    // bookModel.find({price:{$lt: 40}}).then(data =>{
    //     console.log('文檔查詢成功', data)
    // }).catch(err=>{
    //     console.log('文檔查詢失败', err)
    // })

    // 3、find author named a or b
    // bookModel.find({$or: [{author: "余华"}, {author: "罗贯中"}]}).then(data =>{
    //     console.log('文檔查詢成功', data)
    // }).catch(err=>{
    //     console.log('文檔查詢失败', err)
    // })

    // 3、find name contains "三"
    // bookModel.find({name: /三/}).then(data =>{
    //     console.log('文檔查詢成功', data)
    // }).catch(err=>{
    //     console.log('文檔查詢失败', err)
    // })
    bookModel.find({name: new RegExp('三')}).then(data =>{
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
