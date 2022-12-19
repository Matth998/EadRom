import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/Category';
import { CourseModel } from 'src/app/Model/CourseModel';
import { UserModel } from 'src/app/Model/UserModel';
import { AuthService } from 'src/app/service/auth.service';
import { CategoryService } from 'src/app/service/category.service';
import { CourseService } from 'src/app/service/course.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  name = environment.name;
  courseModel: CourseModel = new CourseModel();
  listCourse: CourseModel[];
  course: CourseModel = new CourseModel();

  category: CategoryModel = new CategoryModel();
  listCategory: CategoryModel[];
  idCategory: number;

  user: UserModel = new UserModel();
  idUser = environment.id;

  key = "data";
  reverse = true;

  titleCourse: string;
  categoryCourse: string;

  constructor(

    private router: Router,
    private courseService: CourseService,
    private categoryService: CategoryService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/home'])

    }
    this.getAllCategory();
    this.getAllCourse();

  }

  getAllCategory(){

    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {

      this.listCategory = resp;

    })

  }

  getAllCourse(){

    this.courseService.getAllCourse().subscribe((resp: CourseModel[]) => {

      this.listCourse = resp;

    })

  }


  findByIdCategory() {

    this.categoryService.getByIdCategory(this.idCategory).subscribe((resp: CategoryModel) => {

      this.category = resp;

    })

  }

  findByIdUser() {

    this.authService.getByUser(this.idUser).subscribe((resp: UserModel) => {

      this.user = resp

    })

  }

  findByTitleCourse() {

    if (this.titleCourse == '') {

      this.getAllCourse();

    } else {
      this.courseService.getByTitleCourse(this.titleCourse).subscribe((resp: CourseModel[]) => {

        this.listCourse = resp;

      });
    }
  }

  findByCategoryCourse(){

    if(this.categoryCourse == ''){

      this.getAllCategory()

    }else{

      this.categoryService.getByNameCategory(this.categoryCourse).subscribe((resp: CategoryModel[]) =>{

        this.listCategory = resp;

      })

    }

  }

  post() {

    this.category.id = this.idCategory;
    this.courseModel.category = this.category;

    this.user.id = this.idUser;
    this.courseModel.user = this.user;


    this.courseService.post(this.courseModel).subscribe((resp: CourseModel) => {

      this.courseModel = resp;
      alert("Postagem realizada com sucesso!");
      this.courseModel = new CourseModel();

      this.getAllCourse();

    })

  }
  
}
