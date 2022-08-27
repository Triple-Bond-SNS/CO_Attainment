const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const port = 2710;
const XLSX = require("xlsx");
var fs = require('fs');
var sourceDir = "uploads"
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//EXCEL FILE WORK
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../server/', 'uploads'),
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
app.post('/uploads', async (req, res) => {
  try {
    let upload = multer({ storage: storage }).single('file');
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields
      if (!req.file) {
        return res.send('Please select an file to upload');
      }
      else if (err instanceof multer.MulterError) {
        return res.send(err);
      }
      else if (err) {
        return res.send(err);
      }
    });
  } catch (err) { console.log(err) }
})

function readFileToJson(f_name) {
  var WB = XLSX.readFile(f_name);
  var worksheet = WB.SheetNames[0];
  var WS = WB.Sheets[worksheet];
  var data = XLSX.utils.sheet_to_json(WS);
  return data;
}

var targetDir = path.join(__dirname, sourceDir)     //var targetDir = __dirname + "/uploads";
var files = fs.readdirSync(targetDir)
var combinedData = [];

files.forEach(function (file) {
  var fileExtension = path.parse(file).ext; //Getting file extension
  if (fileExtension === ".xlsx" && file[0] != "~") {
    var fullFilePath = path.join(__dirname, sourceDir, file);
    var data = readFileToJson(fullFilePath);
    combinedData = combinedData.concat(data);
    var result_WB = XLSX.utils.book_new();
    var result_WS = XLSX.utils.json_to_sheet(combinedData);
    XLSX.utils.book_append_sheet(result_WB, result_WS, "Combined Data"); //Combine data
    XLSX.writeFile(result_WB, "results.xlsx");   //Store it in results.xlsx

    const wb = XLSX.readFile("results.xlsx") //Give result file here
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    var range = XLSX.utils.decode_range(ws['!ref']); // get the range
    var columnWiseData = readColumnWiseData(range, ws);

    var newWB = XLSX.utils.book_new();
    var newWS = XLSX.utils.json_to_sheet(columnWiseData);
    XLSX.utils.book_append_sheet(newWB, newWS, "newData");
    XLSX.writeFile(newWB, "columnResultData.xlsx");     //transposing result data

    var TotalData = columnWiseData.map(function (record) {
      record[4] = (record[1] + record[2] + record[3]);
      return record;
    })

    TotalData[0][4] = "Total";
    var PercentData = TotalData.map(function (record) {
      record[5] = (record[4] / 30) * 100;
      return record;
    })
    PercentData[0][5] = "Percentage";
    var Final_WB = XLSX.utils.book_new();
    var Final_WS = XLSX.utils.json_to_sheet(PercentData);
    XLSX.utils.book_append_sheet(Final_WB, Final_WS, "finalData");
    XLSX.writeFile(Final_WB, "Final_result.xlsx");
  }
});

function readColumnWiseData(range, ws) {
  var columnWiseData = [];
  for (var C = range.s.c; C <= range.e.c; ++C) {
    columnWiseData[C] = [];
    for (var R = range.s.r; R <= range.e.r; ++R) {

      var cellref = XLSX.utils.encode_cell({ c: C, r: R }); // construct A1 reference for cell
      if (!ws[cellref]) continue; // if cell doesn't exist, move on
      var cell = ws[cellref];
      columnWiseData[C].push(cell.v);

    };
  }
  return columnWiseData;
}


//ADDING DOWNLOADABLE FILES
var DownloadFile1 = __dirname + "/Final_result.xlsx";
app.get("/result", (req, res) => {
  res.download(DownloadFile1);
});


var DownloadFile2 = __dirname + "/Template/Template1.xlsx";
app.get("/template1", (req, res) => {
  res.download(DownloadFile2);
});


var DownloadFile3 = __dirname + "/Template/Template2.xlsx";
app.get("/template2", (req, res) => {
  res.download(DownloadFile3);
});


var DownloadFile4 = __dirname + "/Template/Template3.xlsx";
app.get("/template3", (req, res) => {
  res.download(DownloadFile4);
});



//MONGO BACKEND
mongoose.connect("mongodb://localhost:27017/CO_Users_db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("DataBase Connected Succesfully"))

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})
const User = new mongoose.model("User", userSchema)
//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password=== user.password){
        res.send({msg:"Login Successful",user:user})
      }
      else{
        res.send({msg:"Incorrect Password"})
      }
    }
    else{
      res.send({msg: "User not registered"})
    }
  })
})
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ msg: "User Already registered" })
    }
    else {
      const user = new User({
        name: name,
        email: email,
        password: password
      })
      user.save(err => {
        if (err) {
          res.send(err);
        }
        else {
          res.send({ msg: "Successfully Registered !" })
        }
      })
    }
  })
})



app.listen(port, () => console.log(`Server Started at http://localhost:${port}`))
