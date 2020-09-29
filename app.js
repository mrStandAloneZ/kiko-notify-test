const express = require('express')
const app = express()
const notify = require('./utils/notify')

const port = process.env.PORT || 3000

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



app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
