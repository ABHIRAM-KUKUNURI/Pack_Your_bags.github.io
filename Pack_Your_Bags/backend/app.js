// const { json } = require('body-parser')
const express = require('express') //importing lib
const app = express()//creating a server
user=[{
    name:"abhi",
    id:95,

},
{
    name:"name2",
    id:09,
}]
app.get('/:id', function (req, res) { //here we get the request and response
  res.send(JSON.stringify(user))   //we send the data to the server req.body ,red.params
})
app.get('/api', function (req, res) {
    res.send('Hello api')
  })

app.listen(5001)