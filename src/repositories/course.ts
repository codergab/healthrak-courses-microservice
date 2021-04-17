import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { Course } from '../entity/Course';

export default createConnection().then((connection) => {
  return connection.getRepository(Course);
});
