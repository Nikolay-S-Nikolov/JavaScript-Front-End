function attachEvents() {
    let loadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let baseUrl = 'http://localhost:3030/jsonstore/blog/';
    let allPosts = {};

    loadPosts.addEventListener('click', createPostsOptions);

    function createPostsOptions() {
        fetch(`${baseUrl}posts`)
            .then(res => res.json())
            .then(data => createOptions(data))
            .catch(error => console.error(error))
    }

    function createOptions(data) {
        let parent = document.getElementById('posts')
        allPosts = data;

        Object.keys(data).forEach((blogId) => {
            let newOption = document.createElement('option');

            Object.assign(newOption, { 'value': blogId }, { 'textContent': data[blogId].title });

            parent.appendChild(newOption);
        })
    }

    btnViewPost.addEventListener('click', postComments);

    function postComments() {
        fetch(`${baseUrl}comments/`)
            .then(res => res.json())
            .then(data => showPostAndComments(data))
            .catch(error => console.error(error))
    }

    function showPostAndComments(data) {
        let postTitle = document.getElementById('post-title');
        let postBody = document.getElementById('post-body');
        let postCommentsUl = document.getElementById('post-comments');

        let postId = document.getElementById('posts').value;
        let coments = Object.values(data).filter((comment) => comment.postId == postId);
        let post = allPosts[postId];

        postCommentsUl.replaceChildren();

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        coments.forEach((comment) => {
            let newLi = document.createElement('li');

            Object.assign(newLi, { 'id': comment.id }, { 'textContent': comment.text });

            postCommentsUl.appendChild(newLi);
        })
    }
}