import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '../types/index';
import firebase from '../services/firebase';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
  },
});

const AddPost: React.FC = () => {
  const classes = useStyles();
  const [post, setPost] = useState<Post>({ title: '', content: '', date: new Date() });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const db = firebase.firestore();
      await db.collection('posts').add(post);
      setPost({ title: '', content: '', date: new Date() });
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        name="title"
        label="Title"
        variant="outlined"
        value={post.title}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.input}
        name="content"
        label="Content"
        variant="outlined"
        value={post.content}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </form>
  );
};

export default AddPost;