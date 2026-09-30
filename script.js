//creating arry to store all posts
let posts=[];
// keep track which post is being edited
let editingPostId=null;

const postForm=document.querySelector('#postForm');

const titleInput =document.querySelector('#titleInput');
const contentInput=document.querySelector('#contentInput');

const titleError=document.querySelector('#titleError');
const contentError=document.querySelector('#contentError');

const postContainer=document.querySelector('#postContainer');

const submitBtn = document.querySelector('button[type="submit"]');
// load post from localstorage

function loadPosts(){
    const saved=localStorage.getItem('blogPosts');
    if(saved){
        posts=JSON.parse(saved);
        
    }catch(e){
        posts=[];
    }
    renderPosts();
}
loadPosts();

// save post to localstorage
function savePosts(){
    localStorage.setItem('blogPosts',JSON.stringify(posts));
}
// Render posts on the page
function renderPosts(){
    postContainer.innerHTML='<p>No posts yet. Write your first post above!</p>';

    posts.forEach(post => {
        const postCard=document.createElement('article');
        postCard.classList.add('post');
        postCard.setAttribute('data-id', post.id);

        postCard.innerHTML=`
            <h3>${post.title}</h3>
            <small>${post.timestamp}</small>
            <p>${post.content}</p>
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
        
        `;
        postContainer.appendChild(postCard);

    })
}
// form validation
function validateForm(){
    let valid=true;

    titleError.textContent='';
    contentError.textContent='';

    if(titleInput.value.trim()===''){
        titleError.textContent='Title is required.';
        valid=false;
    }
    if(contentInput.value.trim()===''){
        contentError.textContent='Content is required.';
        valid= false;
    }
    return valid;
}

// handling(create/update) form submission
postForm.addEventListener('submit',function(e){
    e.preventDefault();

    if(!validateForm())
        return;
    if(editingPostId===null){
        // create new post

        const newPost={
            id:Date.now(),
            title:titleInput.value,
            content:contentInput.value
        };
        posts.push(newPost);
    }
    else{
        // update existing post
        const post = posts.find(p =>p.id===editingPostId);
        post.title=titleInput.value;
        post.content=contentInput.value;

        editingPostId=null;
    }
    savePosts();
    renderPosts();
    postForm.reset();
});
// delete post
function deletePost(id){
    posts=posts.filter(post => post.id !==id);
    savePosts();
    renderPosts();
}

// Edit Post
function editPost(id){
    const post = posts .find (p => p.id===id);

    titleInput.value=post.title;
    contentInput.value = post.content;

    editingPostId =id;
}