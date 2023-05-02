import express from "express";
import Controller from "../contollers";

const router = express.Router()

router.get('/users', Controller.getUsers)
router.post('/users', Controller.createUser)
router.get('/types', Controller.getTypes)
router.post('/types', Controller.createType)
router.get('/tasks', Controller.getTasks)
router.post('/tasks', Controller.createTask)
router.get('/tasks/:id', Controller.showTask)
router.patch('/tasks/:id', Controller.updateTask)
router.delete('/tasks/:id', Controller.deleteTask)

export default router