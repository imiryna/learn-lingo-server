import { JsonController, Get, Post, Body, Param } from "routing-controllers";

import { ITeacher } from "./Teacher.types";
import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";
import { validate } from 'class-validator';
import {CreateTeacher} from "./CreateTeacher.dto"

const storeData: ITeacher[] = [];

@JsonController("/teacher")
export default class Teacher {
  @Get()
  async getAll() {
    return new ApiResponse(true, storeData);
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<ApiResponse<ITeacher | {}>> {
    const teacher = storeData.find((item) => {
      return item.id === id;
    });
    if (!teacher) {
      throw new ApiError(404, {
        code: "TEACHER_NOT_FOUND",
        message: `Teacher with id ${id} not found`,
      })
    }
    return new ApiResponse(true, teacher);
  }

  @Post()
  async setTeacher(@Body() body: CreateTeacher) {
    const errors = await validate(body);

    if (errors.length > 0) {
      throw new ApiError(400, {
        message: "Validation failed",
        code: "PERSON_VALIDATION_ERROR",
        errors,
      });
    }

    const id = storeData.length;
    storeData.push({ ...body, id });

    return new ApiResponse(true, "Person successfully created");
  }
  }

