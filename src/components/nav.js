import { useEffect, useState } from "react";
import { GetCategories } from "./useFetch";
import { useNavigate } from "react-router-dom";

const Nav = (probs) => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (category === null) {
            return;
        }
        if (category !== '') {
            navigate('/category/'+category);
            setCategory(null);
        } else {
            navigate('/');
            setCategory(null);
        }
    }, [category]);

    useEffect(() => {
        GetCategories(setCategories);
    }, []);
    return (
        <nav className="header__nav-wrap">
            <a href="https://mhazarabad.github.io" style={{ color: "white" }}>mhazarabad.github.io<br /><img src="/logo.png" /></a>

            <ul className="header__nav">
                <li className="current"><a href="#" onClick={() => setCategory('')} title="">All</a></li>
                {categories.map((category) => (
                    <li key={category.slug} className="current"><a href="#" onClick={() => setCategory(category.slug)} title="">{category.name}</a></li>
                ))}

            </ul>

            <ul className="header__social">
                <li className="list-inline-item"><a className="flex-center-center" href="https://github.com/mhazarabad"><i className="ti-github"></i></a></li>
                <li className="list-inline-item"><a className="flex-center-center" href="https://linkedin.com/in/mhazarabad"><i className="ti-linkedin"></i></a></li>
                <li className="list-inline-item"><a className="flex-center-center" href="https://mhazarabad.github.io"><i className="ti-world"></i></a></li>
                <li className="list-inline-item"><a className="flex-center-center" href="mailto:mhazarabad@gmail.com"><i className="ti-email"></i></a></li>
            </ul>

        </nav>
    );
}

export default Nav;