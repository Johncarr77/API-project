document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            const postsList = document.getElementById('postsList');
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.className = 'post';
                listItem.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            alert('Error fetching posts. Please try again.');
        });
}
