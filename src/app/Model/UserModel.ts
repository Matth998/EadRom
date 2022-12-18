import { CourseModel } from "./CourseModel";

export class UserModel{

    public id: number;
    public email: string;
    public name: string;
    public password: string;
    public photo: string;
    public type: string;
    public course: CourseModel;

}