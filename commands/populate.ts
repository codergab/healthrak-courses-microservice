import { createConnection } from 'typeorm';
import { Course, CourseStatus } from '../src/entity/Course';

import courses from '../courses';

createConnection().then(async (connection) => {
  const courseRepository = connection.getRepository(Course);

  for (let index = 0; index < courses.length; index++) {
    const courseItem = courses[index];
    const courseRow = {
      name: courseItem.name,
      slug: courseItem.slug,
      type: courseItem.type,
      training_loc: courseItem.training_loc,
      category: courseItem.category,
      image: courseItem.image,
      initial_cost: courseItem.initial_cost,
      cost: courseItem.cost,
      description: courseItem.description,
      more_details: courseItem.moredetails,
      uploader: courseItem.uploader,
      course_module: courseItem.course_module,
      professional_point: (courseItem.prof_point || '0') as string,
      speciality: courseItem.speciality,
      rating: courseItem.rating,
      raters: courseItem.raters,
      date_created: courseItem.date_created,
      status:
        courseItem.status === 'PENDING'
          ? CourseStatus.PENDING
          : CourseStatus.PUBLISHED,
      edited_by: courseItem.edited_by as string,
      date_editied: courseItem.date_edited as string,
      created_at: courseItem.created_at,
      updated_at: courseItem.updated_at,
    };

    await courseRepository.save(courseRow);
  }

  process.exit(0);
});
