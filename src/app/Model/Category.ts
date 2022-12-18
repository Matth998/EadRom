import { CourseModel } from "./CourseModel";

export class CategoryModel{

    public id: number;
    public description: string;
    public photo: string;
    public course: CourseModel;

}