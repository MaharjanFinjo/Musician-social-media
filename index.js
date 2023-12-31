const posts = [
  {
    name: "Finzo Drummer",
    username: "FInzo1853",
    location: "Japan, Ibaraki",
    avatar: "images/finzo.jpeg",
    post: "images/scream.jpeg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Kabi Hendrix",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/kabi.jpeg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Rocky Maya",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/dog.jpeg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feedContainer = document.querySelector(".feed");

function updateLikes(postElement, likes) {
  const likesElement = postElement.querySelector(".likes");
  likesElement.textContent = `${likes} likes`;
}

for (const post of posts) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  postElement.innerHTML = `
    <img class="avatar" src="${post.avatar}" alt="Avatar">
    <div class="post-info">
        <p class="name">${post.name}</p>
        <p class="location">${post.location}</p>
    </div>
    <img class="post-image" src="${post.post}" alt="Post Image">
        
    <div class="post-icon">
      <button class="icon-button like-button">
        <img class="icon" src="images/icon-heart.png" alt="Heart Icon">
      </button>
      <button class="icon-button">
        <img class="icon" src="images/icon-dm.png" alt="DM Icon">
      </button>
      <button class="icon-button">
        <img class="icon" src="images/icon-comment.png" alt="Comment Icon">
      </button>
    </div>
    
    <div class="post-details">
        <p class="likes">${post.likes} likes</p>
      <div class="comments">
        <p class="comment">${post.comment}</p>
      </div>
        <div class="comment-section">
        <input
          type="text"
          class="comment-input"
          placeholder="Add a comment..."
        />
        <button class="comment-button">Post</button>
      </div>
    </div>
  `;

  const likeButton = postElement.querySelector(".like-button");
  likeButton.addEventListener("click", () => {
    post.likes++;
    updateLikes(postElement, post.likes);
  });

  const commentButton = postElement.querySelector(".comment-button");
  commentButton.addEventListener("click", () => {
    const commentInput = postElement.querySelector(".comment-input");
    const newComment = commentInput.value;
    if (newComment) {
      post.comment += `\n${newComment}`;
      const commentElement = postElement.querySelector(".comments");
      commentElement.innerHTML += `<p class="comment">${newComment}</p>`;
      commentInput.value = "";
    }
  });

  feedContainer.appendChild(postElement);
}
