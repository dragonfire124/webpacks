const  express  = require('express');
const  path = require ('path')
const port = process.env.PORT || 8000;
const app = express();
app.use(express.static(__dirname))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'webpack/index.html'))
})
app.listen(port)
console.log('server started')