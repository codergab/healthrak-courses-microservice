import { exec } from 'child_process';
import { Request, Response } from 'express';
import CourseRepository from '../repositories/course';
import { runCommand } from '../../commands/command-runner';

export default class CourseController {
  // private courseRepository: Repository<Course>
  // constructor() {
  //   this.courseRepository = CourseRepository;
  // }

  static async getCourses(req: Request, res: Response) {
    const courses = await (await CourseRepository).find();
    res.json(courses);
  }

  static async createCourses(req: Request, res: Response) {}

  // Esecute Command in browser
  static async seedCourses(req: Request, res: Response) {
    await runCommand('npm run populate', (response: object) => {
      return res.json(response);
    });
  }
}
