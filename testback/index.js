const express = require("express");
const app = express();


const port = 8000
app.get('/', (req, res) => {
  return res.send('Home page')
 })

const admin = (req,res) =>{
  return res.send("this is admin")
}

const isAdmin = (req,res,next) => {
  console.log("isAdmin is running");
  next();
};

app.get('/admin', isAdmin,admin);

   
app.get('/logout', (req, res) => {
    return res.send('u r in logout page')
   })
   
app.listen(port, () => {
  console.log(`Server is on the goooo...`)
})