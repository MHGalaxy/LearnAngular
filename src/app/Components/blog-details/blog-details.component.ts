import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {BlogDetailDto, BlogDto} from '../../Dtos/blog/blog.dto';
import {NgForOf, NgIf} from '@angular/common';
import {getBlogDetailByBlogId} from '../../dbs/blog.db';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  @Input("blogId")
  blogId: number | undefined;
  blogDetails: BlogDetailDto[] = [];

  @Output('blogDetails')
  blogDetailEventEmitter: EventEmitter<BlogDetailDto[]> = new EventEmitter();

  // Inputs (@Input()) are set after the component is created.
  // So blogId does NOT exist when your class first executes property initializers.
  // ngOnInit() runs after Angular sets input values, so this.blogId is correct.
  ngOnInit() {
    if (this.blogId !== undefined) {
      this.blogDetails = getBlogDetailByBlogId(this.blogId);
    }
  }

  sendData(blogId: number | undefined): void {
    this.blogDetailEventEmitter.emit(this.blogDetails);
  }

}
