// import db file
const db = require('./db/db');

// import bookmodel
const MovieModel = require('./models/moviemodel');

// use db function
// db is a functions and success and error also are functions
db(()=>{
  
    const newMovie = {
        title: "Inside Out 2",
        director: 'Kelsey Mann'
    };
   
    MovieModel.create(newMovie).then(data =>{
        console.log('文檔新增成功', data)
    }).catch(err=>{
        console.log('文檔新增失败', err)

    })

}, ()=>{
    console.log('not connected...');
});

    

