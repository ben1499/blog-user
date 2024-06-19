import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BlogList() {

    const [ blogList, setBlogList ] = useState([]);

    const url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${url}/posts`, {
            params: {
                is_published: true
            }
        })
        .then((res) => {
            setBlogList(res.data.data);
        })
    }, [])


    return (
        <div className="blog-list">
            { blogList.map((post) => (
                <Link to={post._id} key={post._id}>
                    <div className="card">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.timestamp_formatted}</p>
                    </div>
                </Link>
            )) }
        </div>
    )
}

export default BlogList;