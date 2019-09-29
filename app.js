let express = require('express')
let path = require('path')
let app = express()

app.use(express.static("public"));

app.set("view engine","ejs"); // so that we can rander ejs


//configure app to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))
app.get( "/",(req, res) => {
  //respond with index.html 
  console.log(__dirname)
  res.render("main")
})
app.listen(process.env.PORT || 3000 , () => {
  console.log("Server listening on port 3000")
})
