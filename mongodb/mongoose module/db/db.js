/**
 * 
 * @param {*} success database is connected 
 * @param {*} error database isn't connected
 */
module.exports = function(success, error){
    // 1.install mongoose
    // npm i mongoose

    // 2.import mongoose
    const mongoose = require('mongoose')

    // set strictQuery to true
    mongoose.set('strictQuery', true)

    // 3.connect mongodb service
    mongoose.connect('mongodb://127.0.0.1:27017/test')

    mongoose.connection.once('open', () => {
        success();
    });


    // 5.set connection 錯誤
    mongoose.connection.on('error', () => {
        error();
    });

    // 6.设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭')
    });
}