import { CategoryModel } from "./Category";
import { UserModel } from "./UserModel";

export class CourseModel{

    public id: number;
    public title: string;
    public description: string;
    public photo: string;
    public video: string;
    public difficulty: string;
    public date: Date;
    public category: CategoryModel;
    public user: UserModel;

}