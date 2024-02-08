import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, {loader as postsLoader} from './routes/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, {action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <Posts />,
    loader: postsLoader,
    children: [
      {path: '/create', element: <NewPost />, action: newPostAction },
      {path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
    ]}
  ]}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


