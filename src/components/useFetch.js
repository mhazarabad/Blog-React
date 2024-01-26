const base_url = "http://127.0.0.1:8000/api/v1.0"

export const GetPosts = (page, tag_slug, category_slug, setPosts, setPage, setNumberPage) => {
    var server_response = null;

    try {
        window.start_preloader();
        fetch(base_url + '/posts/', {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',

            },
            method: "POST",
            body: JSON.stringify({
                'page': page,
                'category_slug': category_slug,
                'tag_slug': tag_slug
            })
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        }).then(data => {
            window.stop_preloader();
            server_response = data;
            setPosts(data.posts);
            setPage(data.page);
            setNumberPage(data.num_pages);
        }).catch(err => {
            window.stop_preloader();
            console.log(err);
        });
    } catch (err) {
        window.stop_preloader();
        console.log(err);
    }
    return { server_response };
};
export const GetCategories = (setCategories) => {
    var server_response = null;

    try {
        fetch(base_url + '/categories/', {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',

            },
            method: "GET"
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        }).then(data => {
            setCategories(data.categories);
        }).catch(err => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
    return { server_response };
};
export const GetPostDetail = (post_slug, setBlog, setTags) => {
    var server_response = null;

    try {
        fetch(base_url + '/posts/' + post_slug + '/', {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',

            },
            method: "GET"
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        }).then(data => {
            setBlog(data.post);
            setTags(data.post.tags);
        }).catch(err => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
    return { server_response };
};
export default GetPosts;