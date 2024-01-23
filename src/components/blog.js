import { useEffect, useState } from "react";

const BlogLanding = () => {
    const [blogs, setBlogs] = useState([1,2,3,4,5,6,7,8,9,10]);
    useEffect(() => {
        window.makeAnimation();
    }, []);
    return (
        <div>

            <div className="masonry-wrap">

                <div className="masonry">

                    <div className="grid-sizer"></div>
                    
                    {blogs.map((blog) => (
                    <article key={blog} className="masonry__brick entry format-standard animate-this">

                        <div className="entry__thumb">
                            <a href="single-standard.html" className="entry__thumb-link">
                                <img src="https://dealflower.it/wp-content/uploads/2021/07/travel.png"
                                    srcSet="https://dealflower.it/wp-content/uploads/2021/07/travel.png 1x, https://dealflower.it/wp-content/uploads/2021/07/travel.png 2x"
                                    alt="" />
                            </a>
                        </div>

                        <div className="entry__text">
                            <div className="entry__header">

                                <h2 className="entry__title"><a href="single-standard.html">Just a Standard Format Post.</a></h2>
                                <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Design</a>
                                        <a href="category.html">Photography</a>
                                    </span>
                                    <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 29, 2019</a>
                                    </span>
                                </div>

                            </div>
                            <div className="entry__excerpt">
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
                                    nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
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
                            <li><a className="pgn__prev" href="#0">Prev</a></li>
                            <li><a className="pgn__num" href="#0">1</a></li>
                            <li><span className="pgn__num current">2</span></li>
                            <li><a className="pgn__num" href="#0">3</a></li>
                            <li><a className="pgn__num" href="#0">4</a></li>
                            <li><a className="pgn__num" href="#0">5</a></li>
                            <li><span className="pgn__num dots">…</span></li>
                            <li><a className="pgn__num" href="#0">8</a></li>
                            <li><a className="pgn__next" href="#0">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
}

export default BlogLanding;