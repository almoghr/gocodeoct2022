//imports
import express from 'express'
import cors from 'cors'
import { dummyTodos } from './data/data.js'
//the initialising of the server itself
const app = express()

// middlewares for the server
app.use(express.json())
app.use(cors())

//routes

//get - fetch data from db
//post - add an item to the db
//put - edit an item inside the db
//delete - delete an item from the db

//build from path and a function that called controller
// app.get('/api/calculator', async (req,res) => {
//     res.send({message:"the answer of is"})
// })
app.get('/api/getAllTodos', async(req,res) => {
    //db function for getting the todos

    res.send(dummyTodos)
})

app.post('/api/todos/addTodo', async (req,res) => {
    console.log(req.body)
    const todo = {...req.body}

    // db function for adding inside the db
    dummyTodos.push(todo)
    console.log(dummyTodos)
    res.send(dummyTodos)
})

app.put('/api/todos/updateTodo/:id', async (req,res) => {
    console.log(req.params)
    const {id} = req.params
    const newTitle = req.body.title

    const clone = [...dummyTodos]

    const todoIndex = clone.findIndex(td => td.id === +id)

    clone[todoIndex].title = newTitle

    res.send(clone)
})

app.delete('/api/todos/deleteTodo/:id', async (req,res) => {
    // at the db you will have findOneAndDelete
    const {id} = req.params
    const clone = [...dummyTodos]
    const todoIndex = clone.findIndex(td => td.id === +id)
    if(todoIndex === -1){
        res.status(404).send({message:"no such todo with the specified index"})
    }
    clone.splice(todoIndex,1)
    res.send(clone)
});

//listener at the bottom which concludes the 
//listening function to fulfuill all of the requests

app.listen(8000,() => {
    console.log('i am listening on port 8000')
})
