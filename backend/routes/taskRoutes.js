const express=require('express');
const router=express.Router();
const taskController=require('../controlers/taskController')

router.post('/',taskController.createTask)
router.get('/',taskController.getTasks)
router.put('/update/:id',taskController.editTask)
router.patch("/toggle/:id", taskController.toggleComplete);
router.delete('/:id',taskController.deletetask)

module.exports=router;