import {BlogDetailDto, BlogDto} from '../Dtos/blog/blog.dto';
import {BlogDetailsComponent} from '../Components/blog-details/blog-details.component';

const blogs: BlogDto[] = [
  {
    id: 1,
    title: 'Getting Started with Angular',
    description: 'A beginner’s guide to setting up and understanding the basics of Angular.',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    title: 'Understanding Dependency Injection',
    description: 'Learn how dependency injection works and why it’s powerful in Angular applications.',
    author: 'Michael Lee'
  },
  {
    id: 3,
    title: 'Component Communication Made Easy',
    description: 'Explore @Input and @Output decorators to make your Angular components talk to each other.',
    author: 'Emma Brown'
  },
  {
    id: 4,
    title: 'Optimizing Angular Performance',
    description: 'Tips and tricks for improving rendering and build performance in large Angular projects.',
    author: 'David Wilson'
  }
];

export const blogDetails: BlogDetailDto[] = [
  {
    id: 1,
    feature: 'Detailed explanation of Angular modules and their structure.',
    blogId: 1
  },
  {
    id: 2,
    feature: 'Examples showing how to bootstrap Angular applications.',
    blogId: 1
  },
  {
    id: 3,
    feature: 'Clarifies how services work with dependency injection.',
    blogId: 2
  },
  {
    id: 4,
    feature: 'Step-by-step example of creating and injecting a service.',
    blogId: 2
  },
  {
    id: 5,
    feature: 'Shows how to send data from parent to child using @Input.',
    blogId: 3
  },
  {
    id: 6,
    feature: 'Explains event communication using @Output and EventEmitter.',
    blogId: 3
  },
  {
    id: 7,
    feature: 'Checklist for improving app startup performance.',
    blogId: 4
  },
  {
    id: 8,
    feature: 'Guide to using Angular CLI build optimizations.',
    blogId: 4
  }
];


export function getBlogs(): BlogDto[] {
  return blogs;
}

export function getBlogById(id: number): BlogDto | undefined {
  return blogs.find(blog => blog.id === id);
}

export function getBlogDetails(): BlogDto[] {
  return blogs;
}

export function getBlogDetailByBlogId(id: number): BlogDetailDto[] {
  return blogDetails.filter(blog => blog.blogId === id);
}

