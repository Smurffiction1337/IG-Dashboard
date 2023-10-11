```tsx
import React, { useEffect, useState } from 'react';
import firebase from '../services/firebase';
import { Button } from '@material-ui/core';

const Authentication = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      {user ? (
        <Button variant="contained" color="secondary" onClick={signOut}>
          Sign Out
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={signInWithGoogle}>
          Sign In with Google
        </Button>
      )}
    </div>
  );
};

export default Authentication;
```