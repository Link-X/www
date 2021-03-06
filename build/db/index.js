"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const os = require("os");
const path = require("path");
const sysType = os.type();
const mysqlJson = require(path.resolve(__dirname, '../md/mysql.json'));
mysqlJson.addree = sysType === 'Linux' ? 'localhost' : mysqlJson.addree;
const pool = mysql.createPool(mysqlJson);
// const connection = mysql.createConnection(mysqlData)
// connection.connect()
function connect() {
    this.query = function (sql, cb, rej) {
        pool.getConnection(function (err, conn) {
            if (err) {
                rej({
                    code: -1,
                    message: 'sql出错',
                    data: {}
                });
                cb(err);
            }
            else {
                conn.query(sql, function (qerr, vals, fields) {
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    cb && cb(qerr, vals, fields);
                });
            }
        });
        // connection.query(sql, (err, data) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     if (err && rej) {
        //         rej({
        //             code: -1,
        //             message: 'sql出错',
        //             data: {}
        //         })
        //         cb(err, data)
        //         return
        //     }
        //     cb && cb(err, data)
        // })
    };
}
const connectObj = new connect();
module.exports = connectObj;
