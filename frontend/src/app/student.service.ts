import { Injectable } from '@angular/core';
import { StudentDetails } from './models/student.model';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  getUrl = environment.getUrl;
  postUrl = environment.postUrl;
  putUrl = environment.putUrl;
  deleteUrl = environment.deleteUrl;
  constructor(private http: HttpClient) {
     console.log(environment);

   }
  getStudents( ): Observable<StudentDetails[]> {
    console.log(environment.getUrl);
    return this.http.get<StudentDetails[]>(environment.getUrl);
   }
   updateStudent(student: StudentDetails) {
     return this.http.put(`${this.putUrl}/${student.enrollmentId}`, student);
   }

   addStudent(student: StudentDetails): Observable<StudentDetails[]> {
      return this.http.post<StudentDetails[]>(this.postUrl, student);
   }

   removeStudent(id: number): Observable<StudentDetails[]> {
   return this.http.delete<StudentDetails[]>(`${this.deleteUrl}${id}`);

  }

}
