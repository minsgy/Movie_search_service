require('dotenv').config()
const axios = require('axios')

const { API_KEY } = process.env

exports.handler = async function(e) {
 const options = JSON.parse(e.body)
 const { title = '', page, method, body } = options
 const  { data } = await axios({
   url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`, 
   method,
   data: body
 })
 return { 
  statusCode: 200,
  body: JSON.stringify(data)
 }
}