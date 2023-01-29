//imports
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { todosAllowedUpdates } from './data/data.js'

dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

//the initialising of the server itself
const app = express()

// middlewares for the server
app.use(express.json())
app.use(cors())

mongoose.set('strictQuery', true)

//schemas

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },
    dateCreated:{
        type: Date,
        default: Date.now(),
    }
})

// model related to the specific schema
const Todos = mongoose.model('Todos', TodoSchema);

//routes

//get - fetch data from db -- mongo function findOne({condition:condition}) \ find({condition:condition}) or find({})
//post - add an item to the db -- new Model({paramters:parmeters}) --> model.save()
//put - edit an item inside the db --> valid operations --> findOne({condition:condition}) --> model.save()
//delete - delete an item from the db --> findOneAndDelete({condition:condition})

//build from path and a function that called controller
// app.get('/api/calculator', async (req,res) => {
//     res.send({message:"the answer of is"})
// })
app.get('/api/getAllTodos', async(req,res) => {
    try{
        const allTodos = await Todos.find({})
    
        res.status(200).send(allTodos)

    } catch(e){
        console.log(e)
        res.status(500).send({message:e})

    }
})

app.post('/api/todos/addTodo', async (req,res) => {
    try{
        const todoTitle = req.body.title
    
        const newTodo = new Todos({title:todoTitle})
        await newTodo.save()
        res.status(200).send(newTodo)

    } catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
})

app.put('/api/todos/updateTodo/:id', async (req,res) => {
    
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) =>
    todosAllowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
        res.status(400).send({message: "Invalid updates"})
    }
    
    try {
        const { id } = req.params
        const todo = await Todos.findOne({_id: id})
      if (!todo) {
        res.status(404).send({message: "todo does not exist"})
      }
      updates.forEach((update) => (todo[update] = req.body[update]));
      await todo.save();
      res.status(200).send(todo)
    } catch (e) {
        console.log(e)
        res.status(500).send({message:e})
    }

})

app.delete('/api/todos/deleteTodo/:id', async (req,res) => {
    try{
        const { id } = req.params
        const deletedTodo = await Todos.findOneAndDelete({_id: id})
        if(!deletedTodo){
            res.status(404).send({message:"no such todo with the specified id"})
        }
        res.status(200).send(deletedTodo)

    } catch(e){
        console.log(e)
        res.status(500).send({message:e})

    }
});

//mongoose connection string
// mongoose.connect("mongodb://127.0.0.1:27017/todosGoCodeOctober", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongodb+srv://gocode:gocode123@gocodeoctober.ghdyqqj.mongodb.net/test

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (info) => {
    app.listen(PORT,() => {
        console.log("info", info)
        console.log('i am listening')
    })    
  })

// mongoose.connect("mongodb://localhost:27017/todosGoCodeOctober", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


//listener at the bottom which concludes the 
//listening function to fulfuill all of the requests

