import { IsEmail, Length, IsInt, Min, Max } from "class-validator";

import type { ITeacher } from "./Teacher.types";

export class CreateTeacher implements Omit<ITeacher, "id"> {
  @Length(2, 20)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(99)
  age: number;
}