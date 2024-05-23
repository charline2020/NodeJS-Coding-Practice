/**
 * 
 * @param {*} success database is connected 
 * @param {*} error database isn't connected
 */
module.exports = function(success, error){
    // determine error as a default 
    if(typeof error !== 'function'){
        error = () => {
            console.log('not connected...');
        }
    }
    // 1.install mongoose
    // npm i mongoose

    // 2.import mongoose
    const mongoose = require('mongoose')

    // import db config
    const {DBHOST, DBPORT, DBNAME} = require('../config/config');

    // set strictQuery to true
    mongoose.set('strictQuery', true)

    // 3.connect mongodb service
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

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