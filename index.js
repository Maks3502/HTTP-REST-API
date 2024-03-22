
const baseUrl = 'https://jsonplaceholder.typicode.com';


function getPosts() {
    return fetch(`${baseUrl}/posts`)
        .then(response => response.json())
        .then(data => console.log('Список постів:', data))
        .catch(error => console.error('Помилка отримання списку постів:', error));
}


function getPost(postId) {
    return fetch(`${baseUrl}/posts/${postId}`)
        .then(response => response.json())
        .then(data => console.log(`Дані про пост з id=${postId}:`, data))
        .catch(error => console.error(`Помилка отримання даних про пост з id=${postId}:`, error));
}


function getUsers() {
    return fetch(`${baseUrl}/users`)
        .then(response => response.json())
        .then(data => console.log('Список користувачів:', data))
        .catch(error => console.error('Помилка отримання списку користувачів:', error));
}


function getUser(userId) {
    return fetch(`${baseUrl}/users/${userId}`)
        .then(response => response.json())
        .then(data => console.log(`Дані про користувача з id=${userId}:`, data))
        .catch(error => console.error(`Помилка отримання даних про користувача з id=${userId}:`, error));
}


getPosts();
getPost(1);
getUsers();
getUser(1);