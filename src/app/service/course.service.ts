import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CourseModel } from '../Model/CourseModel';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  getAllCourse(): Observable<CourseModel[]>{

    return this.http.get<CourseModel[]>('http://localhost:8080/course', this.token);

  }

  getByIdCourse(id: number): Observable<CourseModel>{

    return this.http.get<CourseModel>(`http://localhost:8080/course/${id}`, this.token);

  }

  getByTitleCourse(category: string): Observable<CourseModel[]>{

    return this.http.get<CourseModel[]>(`http://localhost:8080/course/category/${category}`, this.token);

  }

  post(post: CourseModel): Observable<CourseModel>{

    return this.http.post<CourseModel>('http://localhost:8080/course', post, this.token);

  }

  put(post: CourseModel): Observable<CourseModel>{

    return this.http.put<CourseModel>('http://localhost:8080/course', this.post, this.token);

  }

  deleteCourse(id: number){

    return this.http.delete(`http://localhost:8080/course/${id}`, this.token);

  }

}
