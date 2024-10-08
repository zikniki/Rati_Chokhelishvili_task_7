async function fetchData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        for (let i = 0; i < response.data.length; i++) {
            console.log(`id: ${response.data[i].id} / title: ${response.data[i].title}`);
        }
    } catch (error) {
        console.error("this is get function error", error);
    }
}

fetchData();

async function fetchPosts() {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "lorem impsum",
            userId: 1,
        });
        console.log(`id: ${response.data.id} / title: ${response.data.title}`);
    } catch (error) {
        console.error("this is post function error", error);
    }
}

fetchPosts();

async function updateByPut(id) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: "updated title",
            body: "updated body",
            userId: 1,
        });
        console.log(`id: ${response.data.id} / title: ${response.data.title} / body: ${response.data.body}`);
    } catch (error) {
        console.error("this is put function error", error);
    }
}

updateByPut(3);

async function deletePost(id) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status === 200) {
            console.log(`Post deleted successfully: id: ${id}`);
        } else {
            console.error("Failed to delete post");
        }
    } catch (error) {
        console.error("this is delete function error", error);
    }
}

deletePost(1);