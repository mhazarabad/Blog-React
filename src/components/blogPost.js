import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { post_slug } = useParams();
    return ( 
        <div>
            <h1>Blog Post</h1>
        </div>
     );
}
 
export default BlogPost;