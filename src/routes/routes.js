import { Outlet, Route, Routes } from 'react-router-dom'

import PageNotFound from '../components/PageNotFound';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';
import AddPost from '../components/AddPost';
import Login from '../components/Login'
import Unauthorized from '../components/Unauthorized';
import Nav from '../components/Nav';

const AppRoutes =         
    <Routes>
        <Route path="/posts" element={<div className='dashboard'> <Nav /> <Outlet /> </div>}>       
            <Route path="" element={<PostList />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="add" element={<AddPost />} />
        </Route>
            
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/unauthorized" element={<Unauthorized /> } />
    </Routes>

export default AppRoutes;