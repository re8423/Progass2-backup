const express = require('express')

const app = express()
app.use(express.static('client'));
app.use(express.json()); 
const multer = require("multer");
var data = require('./client/Data.json');

const path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var testFolder = process.cwd()
testFolder = testFolder.concat('/client/images')


app.post('/addcomp', function(req,resp){
  console.log(req.body)
  console.log(req)
  var val = req.body.compuser
  var find = req.body.coursename
  console.log(val)
  console.log(find)

  for(var i=0; i<data.length; i++){
    console.log(data[i])
    if(data[i].Name == find){
      const temp = i
      console.log(data[i])
      data[i].Completed.push(val)
      break
    }
  }
  
  console.log(data)
  resp.setHeader("Content-Type", "application/json");
  resp.json({Comp: data[i].Completed})
});


const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/Users/reiishii/Documents/Progass2/client/images"
});


app.post("/upload", upload.single("imgfile" , "imgname", "diff"),
  (req, res) => {
    console.log('UPLAOD HAJIMATA')
    const tempPath = req.file.path;
    const targetPathone = path.join(__dirname, "./client/images");
    const imgname = req.body.imgname
    var tempstr = "./".concat(imgname.toString())
    tempstr = tempstr.concat(".png")
    console.log(tempstr)
    console.log(imgname)
    var targetPath = path.join(targetPathone, tempstr);
    var pathforJson = "./images/".concat(imgname)
    pathforJson = pathforJson.concat(".png")
    console.log(pathforJson)
    var tempdiff = req.body.diff.toString()
    var tempcomp = []
    data.push( { Name: imgname, Difficulty: tempdiff, Completed: tempcomp, Path: pathforJson })
    // console.log(data[0])
    // console.log(data[1])
    // data[1].completed.push("him")
    // console.log(data[1])

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .redirect("index.html")
      });
    }
  }
);

app.get('/getimg2', function(req, resp){
    // console.log(req)
    var val = String(req.query.imgname2)
    
    console.log(req.query)
    console.log('0000000000')
    var out = ''

    for(var i = 0; i<data.length; i++){
      if(data[i].Name == val){
          var outdiff = data[i].Difficulty
          var outcomp = data[i].Completed
          var outname = data[i].Name
          break
      }
    }
    console.log(outdiff)
    console.log(outcomp)
    fs.readdir(testFolder, (err, files) => {
      console.log('BEGIN')
      for(i=0; i<files.length; i++){
        if(files[i] == val.concat('.png')){
          console.log('aru')
          out = files[i]
          console.log(out)
        }
      }
      var out2 = './images/'
      out2 = out2.concat(String(out))
      console.log(out2)
      console.log('1111')
      if(out2=="./images/"){
        resp.setHeader("Content-Type", "application/json");
        resp.json({out2: out2, outdiff: "N/A", outcomp: "N/A", outname: "No such file exists"})
      } else{
        resp.setHeader("Content-Type", "application/json");
        resp.json({out2: out2, outdiff: outdiff, outcomp: outcomp, outname: outname})
      }
    });

})

app.get('/getinfo', function(req, resp){
  // console.log(req)
  var val = String(req.query.imgname3)
  
  console.log(val)
  console.log('0000000000')
  var out = ''
  var dekita = []

  var alldata = {};
  var out2 = []
  var names = []
  var diff = []
  var comp = []

  for(var i = 0; i<data.length; i++){
    for(var a = 0; a<data[i].Completed.length; a++){
      if(val == data[i].Completed[a] && names.includes(data[i].Name) == false){
        names.push(data[i].Name)
        out2.push(data[i].Path)
        diff.push(data[i].Difficulty)
        comp.push(data[i].Completed)
      }
    }
  }

  alldata.outtwo = out2
  alldata.Name = names
  alldata.difficulty = diff
  alldata.completed = comp

  console.log(alldata)
  resp.setHeader("Content-Type", "application/json");
  resp.json(alldata)
})

app.get('/getall', function(req, resp){
  var alldata = {};
  var out2 = []
  var names = []
  var diff = []
  var comp = []

  for(var i=0; i<data.length; i++){
    names.push(data[i].Name)
    diff.push(data[i].Difficulty)
    comp.push(data[i].Completed)
    out2.push(data[i].Path)
  }
  alldata.outtwo = out2
  alldata.Name = names
  alldata.difficulty = diff
  alldata.completed = comp
  console.log(alldata)
  resp.setHeader("Content-Type", "application/json");
  resp.json(alldata)
  
})

module.exports = app; 