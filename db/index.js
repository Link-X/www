const mysql = require('mysql')
const os = require('os')
const sysType = os.type()
const addree = sysType === 'Linux' ? 'localhost' : '39.108.184.64'

const mysqlData = {
    host: addree,
    user: 'root',
    password: 'React1010',
    database: 'xChat',
    useConnectionPooling: true
}
var pool = mysql.createPool(mysqlData);
// const connection = mysql.createConnection(mysqlData)
// connection.connect()

function connect() {
    this.query = function (sql, cb, rej) { 
        pool.getConnection(function(err,conn){
            if(err){
                rej({
                    code: -1,
                    message: 'sql出错',
                    data: {}
                })
                cb(err, data)
            } else {
                conn.query(sql,function(qerr,vals,fields){
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    cb && cb(qerr,vals,fields);
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
     }
}
const connectObj = new connect()
module.exports = connectObj

