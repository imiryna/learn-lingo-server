import Teacher from "./teacher/ControllerTeacher";

type Controller = typeof Teacher;

const controllers = <Controller[]>[Teacher];

export { controllers };