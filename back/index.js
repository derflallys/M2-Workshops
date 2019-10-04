
const express = require('express')
const app = express()
const InMemoryWorkshop = require("./inMemoryWorkshop")
const path = require("path")
const ejs = require('ejs')
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../front', '/ejs'));
app.use(express.static(path.join(__dirname , '../front', 'css')));
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

require('./routes')(app,InMemoryWorkshop);

require('./workshops')(app,InMemoryWorkshop);





app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
})
