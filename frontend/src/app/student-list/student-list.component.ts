import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentDetails } from '../models/student.model';
import { FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService,  private toastr: ToastrService) { }
  stud = new StudentDetails();
  students: StudentDetails[];
  showEditTable = false;
  editRowId: number;
  savedStudentData = [];
  status: string;
    getStudentsList() {
    this.studentService.getStudents().subscribe(response => {
      this.students = response;
    });
  }
  ngOnInit() {
    this.getStudentsList();
  }
  edit(id) {
    this.editRowId = id;
    console.log(this.editRowId);
  }
  // SaveData() {
  //   const formData = new FormData();
  //   formData.append('students', JSON.stringify(this.savedStudentData));
  //   this.studentService.updateStudent().subscribe();
  //}
  deleteStudent(id, index) {
    this.studentService.removeStudent(id).subscribe(() => {
      this.students.splice(index , 1);
    });
    this.toastr.success('Student deleted successfully');
  }
}

