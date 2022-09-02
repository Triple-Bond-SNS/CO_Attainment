import student from '../schema/user-schema.js';
import Student from '../schema/user-schema.js';

export const addStudent = async(req, res) =>{

    const student = req.body;
    const newStudent = new Student(student);

    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export const getData = async(req, res) =>{
    try{
        const student = await Student.find({});
        res.status(200).json(student);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getUser = async (req, res) => {
    try{
        const stud = await Student.find({ _id: req.params.id });
        res.status(200).json(stud);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const editStud = async (req, res) => {
    let user = req.body;
    const editStud = new Student(user);
    try{
        await Student.updateOne({ _id: req.params.id }, editStud);
        res.status(201).json(editStud);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export const delUser = async(req, res) =>{
    try{
        await Student.deleteOne({ _id: req.params.id });
        res.status(200).json({message: 'Data deleted successfully'});
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}