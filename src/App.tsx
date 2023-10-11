import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/materialUI';

import Authentication from './components/Authentication';
import Calendar from './components/Calendar';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import PreviewPost from './components/PreviewPost';
import DeletePost from './components/DeletePost';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={Authentication} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/posts" component={PostList} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/edit-post/:id" component={EditPost} />
          <Route path="/preview-post/:id" component={PreviewPost} />
          <Route path="/delete-post/:id" component={DeletePost} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/notifications" component={Notifications} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;