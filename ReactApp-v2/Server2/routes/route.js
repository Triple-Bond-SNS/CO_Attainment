import express from "express";
import {addStudent, getData, getUser, editStud, delUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addStudent);
router.get('/student-info', getData);
router.get('/:id', getUser);
router.post('/:id', editStud);
router.delete('/:id', delUser);

export default router;