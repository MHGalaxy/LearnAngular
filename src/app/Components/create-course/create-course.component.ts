import {Component, EventEmitter, Output} from '@angular/core';
import {CourseDto} from '../../Dtos/course/course.dto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  course: CourseDto={
    id: 0,
    title: '',
    description: '',
    author: '',
    imageSrc: '',
  }

  isValid = false;

  @Output('course')
  createCourseEvent: EventEmitter<CourseDto> = new EventEmitter();

  createCourse(e: Event){
    e.preventDefault();

    this.isValid =
      this.course.title.trim().length > 0 &&
      this.course.description.trim().length > 0 &&
      this.course.author.trim().length > 0 &&
      this.course.imageSrc.trim().length > 0;

    if (!this.isValid) {
      alert('Please enter all information.');
      return;
    }

    this.createCourseEvent.emit(this.course);
  }
}
