const express = require('express')
const app = express()
const notify = require('./utils/notify')


app.get('', (req, res) => {

    if (!req.query.address) {
       res.send({
         error:'You must provide a address term!!!!'
       })
    }else {
        notify(req.query.address)
        res.send({
          address: req.query.address
        })
    }



})



app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
