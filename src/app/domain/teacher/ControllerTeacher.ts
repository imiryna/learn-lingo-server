import { JsonController, Get, Post, Body, Param, UseAfter } from "routing-controllers";

import { ITeacher } from "./Teacher.types";
import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";
import { validate } from "class-validator";
import { CreateTeacher } from "./CreateTeacher.dto";
import { HTTPRequestLogger } from "app/middlewares/HTTPRequestLogger";
import { firebaseApp } from "../../../../firebase";
import admin from "firebase-admin";

const db = admin.database(firebaseApp);
const ref = db.ref("teachers");

const storeData: ITeacher[] = [];

@JsonController("/teacher")
export default class Teacher {
  @Get()
  @UseAfter(HTTPRequestLogger)
  async getAll() {
    let data;
    let error;
    ref.on(
      "value",
      (snapshot) => {
        console.log("here:", snapshot.val());
        data = snapshot.val();
        // return new ApiResponse(true, "snapshot.val()");
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
        error = errorObject;
        // throw new ApiError(400, errorObject);
      }
    );
    if (error) {
      throw new ApiError(400, error);
    } else {
      return new ApiResponse(true, data, "gjgjgj");
    }
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

  @Post()
  async setTeacher(@Body() body: CreateTeacher) {
    const newId = Math.floor(Math.random() * 1000);
    const errors = await validate(body);

    if (errors.length > 0) {
      throw new ApiError(400, {
        message: "Validation failed",
        code: "PERSON_VALIDATION_ERROR",
        errors,
      });
    }

    try {
      const data = JSON.parse(JSON.stringify(body));
      const childRef = ref.child(newId.toString());
      childRef.set(data);
      return new ApiResponse(true, "Person successfully created");
    } catch (error) {
      return new ApiError(400, {
        message: "Can't add to database",
        code: "DATABASE_ERROR",
        errors: error,
      });
    }
  }
}
