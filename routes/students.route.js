import { Router } from 'express';
import studentsController from '../controllers/students.controller.js'

const router = Router();

router.get('/', studentsController.getStudents);
router.post('/', studentsController.addStudents);
router.patch('/', studentsController.updateStudents);
router.delete('/:id', studentsController.deleteStudents);
router.patch('/:id', studentsController.updateStudents)
export default router