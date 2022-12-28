const fs = require('fs')
const path = require('path')
fpath = path.join(__dirname, 'myTxt.txt')

console.log(fpath)

fs.readFile(fpath, 'utf8', (err, data) =>{
    if(err) throw err
    console.log(data.toString())
})

console.log('Hello there....')

process.on('uncaughtException', err =>{
    console.log(`Error: ${err.message}`)
})