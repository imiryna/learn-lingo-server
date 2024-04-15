import { JsonController, Get, Post, Body, Param, UseAfter } from "routing-controllers";

import { ITeacher } from "./Teacher.types";
import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";
import { validate } from "class-validator";
import { CreateTeacher } from "./CreateTeacher.dto";
import { HTTPRequestLogger } from "../../middlewares/HTTPRequestLogger";

const storeData: ITeacher[] = [];

@JsonController("/teacher")
export default class Teacher {
  @Get()
  @UseAfter(HTTPRequestLogger)
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
      });
    }
    return new ApiResponse(true, teacher);
  }

  addIdToObject = (newObject) => {
    const newId = Math.floor(Math.random() * 1000);
    newObject.id = newId;
    return newObject;
  };

  @Post()
  async setTeacher(@Body() body: CreateTeacher) {
    const bodyWithId = this.addIdToObject(body);
    const errors = await validate(bodyWithId);

    if (errors.length > 0) {
      throw new ApiError(400, {
        message: "Validation failed",
        code: "PERSON_VALIDATION_ERROR",
        errors,
      });
    }

    const id = storeData.length;
    storeData.push({ ...bodyWithId, id });

    return new ApiResponse(true, "Person successfully created");
  }
}
