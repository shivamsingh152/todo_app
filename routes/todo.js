const router = require('express').Router();
const Todo = require('../models/todo')

router.post('/',(req,res)=>{
    const {todo} = req.body; 
    const newtodo = new Todo({todo})
    newtodo.save()
     .then(()=>{
        console.log(`${newtodo} added successfully`)
        res.redirect('/')
     })
     .catch((err)=>console.log(err))
})

router.get('/:_id', (req,res)=>{
    Todo.findByIdAndDelete(req.params._id)
    .then(()=>{
        console.log(`${req.params._id} todo deleted succesfully`)
        res.redirect('/')
    })
    .catch((err)=>console.log(err))
})


module.exports = router;
