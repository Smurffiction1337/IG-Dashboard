export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
  imageUrl: string;
  userId: string;
}

export interface Notification {
  id: string;
  message: string;
  date: Date;
  read: boolean;
}

export interface Analytics {
  totalPosts: number;
  totalUsers: number;
  mostActiveUser: User;
  mostPopularPost: Post;
}