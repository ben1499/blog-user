import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function BlogList() {

    const [ blogList, setBlogList ] = useState([]);

    const url = "http://localhost:3000";

    useEffect(() => {
        axios.get(`${url}/posts`)
        .then((res) => {
            setBlogList(res.data.data);
        })
    }, [])


    return (
        <div className="blog-list">
            { blogList.map((post) => (
                <div className="card" key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.timestamp_formatted}</p>
                </div>
            )) }
        </div>
    )
}

export default BlogList;