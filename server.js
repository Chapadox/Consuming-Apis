const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(cors())


// ao conectar em 'localhost:4567/' o axios faz um request na url informada que retorna um json
app.get('/', async (req, res) =>{

  try{
    
    const {data} = axios.get('https://jsonplaceholder.typicode.com/users')
     return res.json(data)

  } catch (err) {

    console.log(err)   
  }

})


// iniciando Servidor 
app.listen('4567', () => console.log('Servidor Online'))
