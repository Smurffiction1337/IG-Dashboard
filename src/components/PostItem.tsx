import React from 'react';
import { Post } from '../types/index';
import { Card, CardContent, Typography } from '@material-ui/core';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography color="textSecondary">
          {post.date}
        </Typography>
        <Typography variant="body2" component="p">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostItem;