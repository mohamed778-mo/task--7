const express = require("express")

const User = require('../models/user')

const router = express.Router()






router.post('/users',(req,res)=>{
    
    console.log(req.body)


    const user =new User(req.body)

    user.save()

    .then((user)=>{res.status(200).send(user)})
    .catch((e)=>{res.status(400).send(e)})


})



router.get('/users/:id' , (req,res)=>{
    const _id = req.params.id
     User.findById(_id)
    .then((user)=>{ if (!user) { return res.status(401).send("not found")
        }
         res.status(200).send(user)})
    .catch((e)=>{res.status(500).send(e)})

    
})



router.patch('/users/:id', async(req,res)=>{
try {
      const _id = req.params.id
    const user = await User.findByIdAndUpdate(_id ,req.body,{
        new  : true ,
        runValidators : true
    })
    if (!user) {
      return  res.status(404).send('please add a true id')
        
    }

        res.status(200).send(user)

}   
catch (error) {
        res.status(400).send(error)
}  
    
})



router.delete('/users/:id',(req,res)=>{

    const id = req.params.id
    const user = User.findByIdAndDelete(id , req.body ,{
        new: true,
        runValidators:true
    })
    
    .then((user)=>{res.status(200).send(user)})
   
    .catch((error)=>{res.status(401).send(error)})

    if (!user) {
      return  res.status(404).send('not found')
      }console.log('done4')
})








module.exports=router;