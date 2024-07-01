const jwt = require('jsonwebtoken');

// create token
// let token = jwt.sign({
//     username: "halu"
// }, 'nodejs', {
//     expiresIn: 60*10, // unit = second
// })

// console.log(token);

let t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbHUiLCJpYXQiOjE3MTk4NDM2NzUsImV4cCI6MTcxOTg0NDI3NX0.eOwzpo6JlpaEdEKvDE1j0KrBwv1RzhqjW15067Z--nw";


// verify token
jwt.verify(t,'nodejs',(err, data) =>{
    if(err){
        console.log('Failed');
        return
    }
    console.log(data);
})