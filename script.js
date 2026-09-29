//creating arry to store all posts
let posts=[];
// keep track which post is being edited
let editingPostId=null;

const postForm=document.getElementById('postForm');
const titleInput =document.getElementById('titleInput');
const contentInput=document.getElementById('contentInput');

const titleError=document.getElementById('titleError');
const contentError=document.getElementById('contentError');

const postContainer=document.getElementById('postContainer');

// load post from localstorage

function loadPosts(){
    const saved=localStorage.getItem('blogPosts');
    if(saved){
        posts=JSON.parse(saved);
        renderPosts();
    }
}
loadPosts();

// save post to localstorage
function savePosts(){
    localStorage.setItem('blogPosts',JSON.stringify(posts));
}
// Render posts on the page
function renderPosts(){
    postContainer.innerHTML='';

    posts.forEach(post => {
        const div=document.createElement('div');
        div.classList.add('post');

        div.innerHTML=`
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick='editPost(${post.id})'>Edit</button>
             <button onclick='deletePost(${post.id})'>Delete</button>
        
        `;
        postContainer.appendChild(div);

    })
}
// form validation
function validateForm(){
    let valid=true;

    titleError.innerText='';
    contentError.innerText='';

    if(titleInput.ariaValueMax.trim()===''){
        titleError.innerText='Title is required.';
        valid=false;
    }
    if(contentInput.value.trim()===''){
        contentError.innerText='Content is required.';
        valid= false;
    }
    return valid;
}