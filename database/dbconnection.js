import mysql from "mysql2"


export const dbconnection = () => {
     const conn = mysql.createConnection("mysql://uvkciywcabkyubmc:3QdxX9Sf5I2VY3oLPU3q@bltmf9lymkvja8fdmoh5-mysql.services.clever-cloud.com:3306/bltmf9lymkvja8fdmoh5")

    conn.connect((err) => {
        if (err) return console.log("database error");
        console.log("database connection");
    })


    return conn
}