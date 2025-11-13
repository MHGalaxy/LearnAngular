export interface BlogDto {
  id: number;
  title: string;
  description: string;
  author: string;
}

export interface BlogDetailDto {
  id: number;
  feature: string;
  blogId: number;
}
