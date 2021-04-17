import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainingLocation {
  @PrimaryGeneratedColumn()
  id!: string;
}
