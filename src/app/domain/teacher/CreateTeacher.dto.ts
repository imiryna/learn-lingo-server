import { Length, IsInt, Mine ArrayNotEmpty, ValidateNested, IsUrl, MaxLength } from "class-validator";

import type { ITeacher, Reviews } from "./Teacher.types";

export class CreateTeacher implements Omit<ITeacher, "id"> {
  @Length(2, 20)
  name: string;

  @Length(2, 20)
  surname: string;

  @ArrayNotEmpty()
  languages: string[];

  @ArrayNotEmpty()
  levels: string[];

  @Min(0)
  rating: number;

  // @ValidateNested()
  @ArrayNotEmpty()
  reviews: Reviews;

  @Min(0)
  price_per_hour: number;

  @IsInt()
  lessons_done: number;

  @IsUrl()
  avatar_url: string;

  @MaxLength(200)
  lesson_info: string;

  @ArrayNotEmpty()
  conditions: string[];

  @MaxLength(1000)
  experience: string;
}
