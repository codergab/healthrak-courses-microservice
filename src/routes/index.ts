import express from 'express';
import CourseController from '../controllers/CourseController';
import { catchAsync } from '../handlers/errorHandler';

const Route = express.Router();

Route.get('/courses', catchAsync(CourseController.getCourses));
Route.get('/seed-db', catchAsync(CourseController.seedCourses));

export default Route;
