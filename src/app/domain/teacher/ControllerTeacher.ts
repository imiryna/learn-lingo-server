import { JsonController, Get, Post, Body, Param } from "routing-controllers";

import { ITeacher } from "./Teacher.types";

const storeData: ITeacher[] = [];

@JsonController("/teacher")
export default class Teacher {
  @Get()
  async getAll() {
    return storeData;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<ITeacher | {}> {
    const teacher = storeData.find((item) => {
      return item.id === id;
    });

    return teacher || {};
  }

  @Post()
  async setTeacher(@Body() body: ITeacher) {
    storeData.push(body);

    return true;
  }
}

