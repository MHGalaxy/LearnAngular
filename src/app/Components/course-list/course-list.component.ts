import { Component } from '@angular/core';
import {CourseItemComponent} from '../course-item/course-item.component';
import {NgForOf, NgIf} from '@angular/common';
import {CourseDto} from '../../Dtos/course/course.dto';
import {addCourse, getCourses} from '../../dbs/course.db';
import {CreateCourseComponent} from '../create-course/create-course.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    NgForOf,
    NgIf,
    CreateCourseComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: CourseDto[];

  constructor() {
    this.courses = getCourses();
  }

  handleCreateCourse(e: CourseDto) {
    addCourse(e);
  }
}
