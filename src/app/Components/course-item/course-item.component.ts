import {Component, Input} from '@angular/core';
import {BlogDetailsComponent} from "../blog-details/blog-details.component";
import {NgForOf} from "@angular/common";
import {CourseDto} from '../../Dtos/course/course.dto';

@Component({
  selector: 'app-course-item',
  standalone: true,
    imports: [
        BlogDetailsComponent,
        NgForOf
    ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {
  @Input("course")
  course: CourseDto | undefined;
}
