const url = "https://jsonplaceholder.typicode.com/posts";
const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

// Get all posts
async function getAllPosts(){
    const response = await fetch(url);
    console.log(response);

    const data = await response.json() // Isso é um método
    console.log(data)
}

getAllPosts();