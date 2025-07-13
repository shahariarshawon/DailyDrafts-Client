import React from 'react';
import UpdateBlog from '../Components/UpdateBlog/UpdateBlog';
import { useLoaderData } from 'react-router';

const UpdateBlogPage = () => {
    const blog=useLoaderData();
    return (
        <div>
            <UpdateBlog blog={blog}></UpdateBlog>
        </div>
    );
};

export default UpdateBlogPage;