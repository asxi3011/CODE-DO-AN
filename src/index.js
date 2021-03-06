const express = require('express')
const exphbs  = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3030;  //heoroku port
const route = require('./route/index.js')
const methodOverride = require('method-override');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const app = express()

app.get('/', function (req, res) {
  res.render('home');
})
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.set('views',(path.join(__dirname,'resources/views')));
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/db');
db.connect();

app.engine('.hbs', exphbs(
  {extname:".hbs"}
));



app.use(methodOverride('_method'));
app.set('view engine', '.hbs');
route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})