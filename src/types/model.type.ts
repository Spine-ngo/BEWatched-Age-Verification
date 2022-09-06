import { Gender } from './gender.type';

export class Model {
  public id?: string | number;
  public imagePath!: string;
  public underaged!: boolean;
  public gender?: Gender;
}
