import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Post } from '../types/index';
import firebase from '../services/firebase';

interface EditPostProps {
  post: Post;
  updatePost: (post: Post) => void;
}

const EditPost: React.FC<EditPostProps> = ({ post, updatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleUpdatePost = () => {
    const updatedPost = {
      ...post,
      title,
      content,
    };

    firebase.firestore().collection('posts').doc(post.id).update(updatedPost)
      .then(() => {
        updatePost(updatedPost);
      });
  };

  return (
    <div>
      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        label="Content"
        value={content}
        onChange={handleContentChange}
      />
      <Button onClick={handleUpdatePost}>
        Update Post
      </Button>
    </div>
  );
};

export default EditPost;