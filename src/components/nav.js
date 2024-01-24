import { useEffect, useState } from "react";

const Nav = () => {
    const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <nav className="header__nav-wrap">
            <a href="https://mhazarabad.github.io" style={{color:"white"}}>mhazarabad.github.io<br/><img src="/logo.png"/></a>
            
            <ul className="header__nav">
                {categories.map((category) => (
                    <li key={category} className="current"><a href="index.html" title="">Home</a></li>
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