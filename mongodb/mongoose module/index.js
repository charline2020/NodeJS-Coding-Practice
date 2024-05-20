
// import db file
const db = require('./db/db');

// import mongoose
const mongoose = require('mongoose')

// use db function
// db is a functions and success and error also are functions
db(()=>{
    // console.log('connected...');

    // put database code here
    
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    let bookModel = mongoose.model('novel', bookSchema);
    
    const newBook = {
        name: "If Only I Had Told Her ",
        author: 'Laura Nowlin',
        price: 90
    };
   
    bookModel.create(newBook).then(data =>{
        console.log('文檔新增成功', data)
    }).catch(err=>{
        console.log('文檔新增失败', err)

    })

}, ()=>{
    console.log('not connected...');
});

    

