import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CourseStatus {
  PENDING,
  PUBLISHED,
}

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @Column()
  type!: string;

  @Column('text')
  training_loc!: string;

  @Column()
  category!: string;

  @Column()
  image!: string;

  @Column()
  initial_cost!: string;

  @Column()
  cost!: string;

  @Column('text')
  description!: string;

  @Column()
  more_details?: string;

  @Column()
  uploader!: string;

  @Column()
  course_module!: string;

  @Column('text', {
    default: '0',
    nullable: true,
  })
  professional_point!: string;

  @Column()
  speciality!: string;

  @Column()
  rating!: string;

  @Column('text')
  raters!: string;

  @Column('timestamptz')
  date_created!: string;

  @Column('int')
  status!: CourseStatus;

  @Column('text', {
    nullable: true,
  })
  edited_by!: string;

  @Column('timestamptz', {
    nullable: true,
  })
  date_editied!: string;

  @Column('timestamptz')
  created_at!: string;

  @Column('timestamptz')
  updated_at!: string;
}
