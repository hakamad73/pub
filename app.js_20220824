const express = require('express');
const mysql = require('mysql');
const app = express();

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

app.listen(3000);
