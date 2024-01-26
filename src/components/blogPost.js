import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetPostDetail } from "./useFetch";

const BlogPost = () => {
    const { post_slug } = useParams();
    const [tags, setTags] = useState([{ name: null, slug: null }]);
    const [blog, setBlog] = useState({ title: null, author: null, category: { name: null, slug: null }, content: null, header_image_url: null });
    useEffect(() => {
        GetPostDetail(post_slug, setBlog, setTags);
    }, []);
    useEffect(() => {
        document.getElementById('post_content').innerHTML = blog.content;
    }, [blog]);
    return (
        <div className="s-content content">
            <main className="row content__page">

                <article className="column large-full entry format-standard">

                    <div className="media-wrap entry__media">
                        <div className="entry__post-thumb">
                            <img src={blog.header_image_url}
                                srcSet={blog.header_image_url + ' 100w,' + blog.header_image_url + '100w,' + blog.header_image_url + '500w'}
                                sizes="(max-width: 2000px) 100vw, 2000px" alt="" />
                        </div>
                    </div>

                    <div className="content__page-header entry__header">
                        <h1 className="display-1 entry__title">
                            {blog.title}
                        </h1>
                        <ul className="entry__header-meta">
                            <li className="author">By <a href="#0">{blog.author}</a></li>
                            <li className="date">{blog.created}</li>
                            <li className="cat-links">
                                <a href="#0">{blog.category.name}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="entry__content">

                        <div id="post_content">
                        </div>


                        <p className="entry__tags">
                            <span>Post Tags</span>

                            <span className="entry__tag-list">
                                {tags.map((tag) => (
                                    <a key={tag.slug} href="#0">{tag.name}</a>
                                ))}
                            </span>

                        </p>
                    </div>

                </article>
            </main>
        </div>
    );
}

export default BlogPost;