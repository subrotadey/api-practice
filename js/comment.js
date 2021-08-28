function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => displayComments(json))
}
loadComments();

function displayComments(comments){
    const commentContainer = document.getElementById('comments');
    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>Name:${comment.name}</h3>
        <h3>Email:${comment.email}</h3>
        <p>Email:${comment.body}</p>
        `
        commentContainer.appendChild(div);
    }
}