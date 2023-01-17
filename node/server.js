//imports
import express from 'express'
import cors from 'cors'

//the initialising of the server itself
const app = express()

// middlewares for the server
app.use(express.json())
app.use(cors())

//routes
//build from path and a function that called controller
app.get('/calculator', async (req,res) => {
    res.send({message:"the answer of is"})
})

//listener at the bottom which concludes the 
//listening function to fulfuill all of the requests

app.listen(8000,() => {
    console.log('i am listening on port 8000')
})
