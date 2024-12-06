import { dbconnection } from "../../database/dbconnection.js"

import bcrypt from "bcrypt"
const connection = dbconnection() 

const signup = (req, res) => {
    connection.query('insert into users set ?', req.body)
    res.status(201).json({ message:"success" })

}

const signin = (req, res) => {
  

  connection.execute(`select id,email,password from users where email = '${req.body.email}'`, (err, data) => {
      
    if (data?.length > 0) {
      let match = bcrypt.compareSync(req.body.password, data[0].password)
      if (match)
        res.json({ message: "Log in .....", userId: data[0].id })
      else  res.status(401).json({message:"password Not found"})
    }
    
    else
      res.status(401).json({ message: "email Not found" })

   })
}

export {
  signup,
  signin
}