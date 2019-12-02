import { StudentDetails } from './../models/student.model';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
student = new StudentDetails();
savedStudent = [];
  constructor(private studentService: StudentService, private toastr: ToastrService) { }


  ngOnInit() {
  }
  saveStudentData() {
    this.studentService.addStudent(this.student).subscribe();
    console.log('student added');
    // showSuccess() {
    this.toastr.success('Student added successfully');
    // }
  }

}
