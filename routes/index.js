import { Router } from "express";
import studentsRoute from "./students.route.js";
const router = Router()

router.use('/students', studentsRoute)

export default router

