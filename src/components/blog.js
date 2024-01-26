import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import GetPosts from "./useFetch";
const BlogLanding = () => {
    const { category_slug, tag_slug } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [tag, setTag] = useState(tag_slug);
    const [category, setCategory] = useState(category_slug);
    const [numberPage, setNumberPage] = useState(0);
    const navigate = useNavigate();
    const goToBlog = (blog_slug) => {
        navigate(`/post/${blog_slug}`);
    }
    const goToCategory = (category_slug) => {
        navigate(`/category/${category_slug}`);
    }
    // const searchTag = (tag) => {
    //     setTag(tag);
    // }

    useEffect(() => {
        GetPosts(1, '', category_slug, setBlogs, setPage, setNumberPage);
        window.makeAnimation();
    }, [category_slug]);

    useEffect(() => {
        GetPosts(1, tag_slug, '', setBlogs, setPage, setNumberPage);
        window.makeAnimation();
    }, [tag_slug]);

    

    useEffect(() => {
        GetPosts(page, '', '', setBlogs, setPage, setNumberPage);
    }, []);

    useEffect(() => {
        GetPosts(1, '', category, setBlogs, setPage, setNumberPage);
        window.makeAnimation();
    }, [category]);
    
    useEffect(() => {
        GetPosts(1, tag, '', setBlogs, setPage, setNumberPage);
        window.makeAnimation();
    }, [tag]);
    useEffect(() => {
        window.makeAnimation();
    }, [blogs]);
    
    useEffect(() => {
        GetPosts(page, tag, category, setBlogs, setPage, setNumberPage);
        window.makeAnimation();
    }, [page]);
    return (
        <div>

            <div className="masonry-wrap">

                <div className="masonry">

                    <div className="grid-sizer"></div>

                    {blogs.map((blog) => (
                        <article key={blog.slug} className="masonry__brick entry format-standard animate-this">

                            <div className="entry__thumb">
                                <a onClick={() => { goToBlog(blog.slug); return }} className="entry__thumb-link">
                                    <img src={blog.header_image_url}
                                        srcSet={blog.header_image_url + " 1x," + blog.header_image_url + " 2x"}
                                        alt="" />
                                </a>
                            </div>

                            <div className="entry__text">
                                <div className="entry__header">

                                    <h2 className="entry__title"><a onClick={() => { goToBlog(blog.id); return }}>{blog.title}</a></h2>
                                    <div className="entry__meta">
                                        <span className="entry__meta-cat">
                                            <a onClick={() => { goToCategory(blog.category.slug); return }}>{blog.category.name}</a>
                                        </span>
                                        <span className="entry__meta-date">
                                            <span>{blog.created}</span>
                                        </span>
                                    </div>

                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        {blog.summary}
                                    </p>
                                </div>
                            </div>

                        </article>
                    ))}


                </div>

            </div>

            <div className="row">
                <div className="column large-full">
                    <nav className="pgn">
                        <ul>
                            {page>1 ? <li><a className="pgn__num" onClick={() => { setPage(page - 1); return }} href="#">Prev</a></li> : null}
                            {page >= 1 ? <li><a className={page > 1 ? "pgn__num" : "pgn__num current"} onClick={() => { setPage(1); return }} href="#">1</a></li> : null}
                            {page - 1 > 1 ? <li><a className="pgn__num">...</a></li> : null}
                            {page > 1 ? <li><a className="pgn__num current" href="#">{page}</a></li> : null}

                            {numberPage > page + 1 ? <li><a className="pgn__num">...</a></li> : null}

                            {numberPage > 1 && numberPage > page ? <li><a className="pgn__num" onClick={() => { setPage(numberPage); return }} href="#">{numberPage}</a></li> : null}
                            {numberPage > page ? <li><a className="pgn__num" onClick={() => { setPage(page + 1); return }} href="#">Next</a></li> : null}
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
}

export default BlogLanding;