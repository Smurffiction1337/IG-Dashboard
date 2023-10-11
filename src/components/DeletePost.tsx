import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '../types/index';
import firebase from '../services/firebase';

const useStyles = makeStyles({
  deleteButton: {
    color: 'red',
  },
});

interface DeletePostProps {
  post: Post;
}

const DeletePost: React.FC<DeletePostProps> = ({ post }) => {
  const classes = useStyles();

  const handleDelete = async () => {
    try {
      await firebase.firestore().collection('posts').doc(post.id).delete();
      alert('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  return (
    <Button className={classes.deleteButton} onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeletePost;