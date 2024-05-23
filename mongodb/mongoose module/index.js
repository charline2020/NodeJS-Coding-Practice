
// import db file
const db = require('./db/db');

// import mongoose
const mongoose = require('mongoose')

// import bookmodel
const bookModel = require('./models/bookmodel');

// use db function
// db is a functions and success and error also are functions
db(()=>{
  
    const newBook = {
        name: "The Women: A Novel",
        author: 'Kristin Hannah',
        price: 50
    };
   
    bookModel.create(newBook).then(data =>{
        console.log('文檔新增成功', data)
    }).catch(err=>{
        console.log('文檔新增失败', err)

    })

}, ()=>{
    console.log('not connected...');
});

    

