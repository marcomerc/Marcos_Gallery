let express = require('express')
let path = require('path')
let app = express()
const PORT = 4000;
const port = process.env.PORT || PORT
app.use(express.static("public"));

app.set("view engine","ejs"); // so that we can rander ejs


//configure app to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))
app.get( "/",(req, res) => {
  //respond with index.html 
  res.render("main")
})


app.get("/picture1",(req,res)=>{

    res.render("pic1")
})
app.get("/picture2",(req,res)=>{

    res.render("pic2")
})
app.get("/picture3",(req,res)=>{

    res.render("pic3")
})
app.get("/picture4",(req,res)=>{

    res.render("pic4")
})
app.get("/picture5",(req,res)=>{

    res.render("pic5")
})
app.get("/picture6",(req,res)=>{

    res.render("pic6")
})
app.get("/about",(req,res)=>{
    res.render("about")
})


app.listen(port, () => {
  console.log("the port",process.env.PORT)
})
