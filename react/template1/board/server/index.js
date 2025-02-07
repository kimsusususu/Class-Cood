const express = require('express');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 3000;
const cors = require('cors');

let corsOptions = {
    origin:"*",//출저 허용 옵션
    credential:true,//사용자 인증이 필요한 리소스(쿠키..등)접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"bbs",
});




app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`);
});

app.get("/list", (req,res)=> {
    const sqlQuery = "SELECT BOARD_ID,BOARD_TITLE,REGISTER_ID,DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d')AS REGISTER_DATE FROM BOARD;";
    db.query(sqlQuery,(err,result)=> {
        res.send(result);
    });
});