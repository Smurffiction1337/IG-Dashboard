import React from 'react';
import { Post } from '../types/index';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '../styles/materialUI';

interface PreviewPostProps {
  post: Post;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PreviewPost: React.FC<PreviewPostProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.content}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Scheduled for: {post.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PreviewPost;