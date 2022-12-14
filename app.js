const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser')

// データベース接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'ubuntu',
  password: 'password',
  database: 'test'
});

// テーブルitemsのデータを取得してindex.ejsで表示
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs',{items:results});
    }
  );
});

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/foo', (req, res) => {
  console.log('--- post() /foo called ---')
  console.log(req.body)
const q = "insert items(name) values ('"+req.body.yasai+"');"
    connection.query(q, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
    });	
	res.redirect('/');
});

app.listen(3000);
