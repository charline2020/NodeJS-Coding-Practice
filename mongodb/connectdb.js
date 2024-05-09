// 1.install mongoose
// npm i mongoose

// 2.import mongoose
const mongoose = require('mongoose')

// set strictQuery to true
mongoose.set('strictQuery', true)

// 3.connect mongodb service
mongoose.connect('mongodb://127.0.0.1:27017')

// 4.set return msg
mongoose.connection.on('open', () => {
    console.log('連接成功')
})

// once 事件回调函数只调用一次
// mongoose.connection.once('open', () => {
//     console.log('连接成功')
// })

// 5.set connection 錯誤
mongoose.connection.on('error', () => {
    console.log('連接錯誤')
})

// 6.设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})

// close mongodb connection after 5 seconds
setTimeout(() => {
    mongoose.disconnect();
}, 5000);