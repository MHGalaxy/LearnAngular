import { Component } from '@angular/core';
import {BlogDetailDto, BlogDto} from '../../Dtos/blog/blog.dto';
import {getBlogs} from '../../dbs/blog.db';
import {NgForOf, NgIf} from '@angular/common';
import {BlogDetailsComponent} from '../blog-details/blog-details.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    BlogDetailsComponent
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs: BlogDto[];

  constructor() {
    this.blogs = getBlogs();
  }

  receiveData(e: BlogDetailDto[]){
    //alert(JSON.stringify(e));
    console.log(e);
  }
}
