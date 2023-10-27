import React, { useEffect, useState } from 'react';
import { Post } from '../types/index';
import firebase from '../services/firebase';
import PostItem from './PostItem';
import { List } from '@material-ui/core';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('posts')
      .onSnapshot(snapshot => {
        const postsData: Post[] = [];
        snapshot.forEach(doc =>
          postsData.push({ ...doc.data(), id: doc.id } as Post)
        );
        setPosts(postsData);
      });

    return unsubscribe;
  }, []);

  return (
    <List>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </List>
  );
};

export default PostList;