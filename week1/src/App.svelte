<script>
  import Counter from './lib/Counter.svelte'
  import data from "../data.json"

import Fa from 'svelte-fa/src/fa.svelte'
import { faPlus, faMinus, faReply, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

let count = 0

let comments = data.comments

</script>

<main>
  <div class="container">
  <div class="card-container">
    <div class="cards">
    {#each comments as comment (comment.id)}

      <div class="card">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{comment.score}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src={comment.user.image.png} alt={comment.user.username} />
                </div>
                <h4 class="name">{comment.user.username}</h4>
                <span class="time">{comment.createdAt}</span>
              </div>
              <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
            </div>

            <div class="card-body">
              {comment.content}
            </div>
          </div>
          </div>
      </div>

      {#if comment.replies.length !== 0}
        {#each comment.replies as reply (reply.id)}
      <section class="reply-section">
        <div class="line"></div>

      <div class="card card-reply">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{reply.score}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src={reply.user.image.png} alt={reply.user.username} />
                </div>
                <h4 class="name">{reply.user.username}</h4>
                {#if reply.user.username === "juliusomo"}
                <div class="me">you</div>
                {/if}
                <span class="time">{reply.createdAt}</span>
              </div>
              {#if reply.user.username === "juliusomo"}
              <div class="edit">
                <Fa style="color: hsl(358, 79%, 66%); margin-right: .3rem;" icon={faTrash} /> <span style="color: hsl(358, 79%, 66%); margin-right: .5rem; cursor: pointer">Delete</span>
                <Fa style="color: #615d9d; margin-right: .3rem;" icon={faEdit} /> <span class="reply-text" style="cursor: pointer">Edit</span>
              </div>
              {:else}
                <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
              {/if}
            </div>

            <div class="card-body">
            {#if reply.replyingTo}
              <p class="reply-to-username">@{reply.replyingTo}</p> {reply.content}
            {:else}
            {reply.content}
            {/if}
            </div>
          </div>
          </div>
      </div>
      </section>
      {/each}
      {/if}

      {/each}

      <section class="add-comment-section">
        <div class="card">
          <div class="comment-box">
            <div class="flex-textarea">
              <div class="profile-picture-container">
                <img src={data.currentUser.image.png} alt={data.currentUser.username} />
              </div>
              <textarea class="textarea" placeholder="Add a comment..."></textarea>
              <button class="submit-button">Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  </div>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

:global(*) {
margin: 0;
    border: 0;
    box-sizing: border-box;
}

:global(body) {
    background-color: #f5f6fa;
    font-family: 'Rubik', sans-serif !important;
    line-height: 1.6;
	}

  .container {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
  }

  .card-container {
    width: 800px;
    margin: 0 auto;

  }

  .cards {
    width: 100%;
  }

  .card {
    width: 100%;
    padding: 1rem;
    background-color: hsl(0, 0%, 100%);
    margin: 0 auto 1rem auto;
  }

  .flex {
    display: flex;
  }

  .counter {
    width: 50px;
    height: 100%;
    padding: 1rem;
    background-color:hsl(223, 19%, 93%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 1.5rem;
  }

  .counter-number {
    margin: 1rem 0;
  }

  .button {
    cursor: pointer;

  }

  .card-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

  }

  .profile {
    display: flex;
    align-items: center;

  }

  .time {
    color: #9e9fa4;
  }

  .image-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    color: #969a9f;
    margin-right: .5rem;
  }

  .reply {
    justify-self: flex-end;
    cursor: pointer;
  }

  .reply-text {
    margin-left: .5rem;
    color: #615d9d;
  }

  .card-body {
    color: #c2c4c5;
    margin-top: .6rem;
  }

  .reply-section {
        margin-right: 2rem;
    position: relative;
    left: 2rem;
  }

  .line {
    height: 100%;
    width: 6px;
    background-color: hsl(223, 19%, 93%);
    position: absolute;
   
  }

  .card-reply {
    margin-left: 3rem;
    width: fit-content;
  }

  .add-comment-section {
  }

  .comment-box {
    padding: .5rem;
  }

  .profile-picture-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .textarea {
    width: 80%;
    height: 100px;
    border: 1px solid lightgrey;
    margin-left: .5rem;
    border-radius: 5px;
    padding: .5rem .7rem;
    outline: none;
  }

  .submit-button {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsl(238, 40%, 52%);
    color: white;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    border-radius: 10px;
    margin-left: .5rem;
    font-weight: 700;
  }

  .edit {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .me {
    width: 35px;
    height: 25px;
    background-color: hsl(238, 40%, 52%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  .reply-to-username {
    font-weight: 600;
    color: hsl(211, 10%, 45%);
    display: inline;
  }

  .flex-textarea {
    display: flex;
  }

  @media screen and (max-width: 760px) {
    .flex-textarea {
      flex-direction: column;
    }
    .card-main {
      align-items: flex-start;
    }
    .card-container {
      width: 100%;
    }

    .reply-section {
      left: 0;
      width: inherit;
    }

    .card-reply {
      margin-left: 10px;
    }

    .flex {
      flex-direction: column-reverse;
    }

    .counter {
      flex-direction: row;
      width: 100px;
    height: 35px;
    padding: .5rem;
    margin-top: 1rem;
    }

    .reply {
      display: none;
    }

    .edit {
      display: none;
    }

    .profile-picture-container {
      display: none;
    }

    .submit-button {
      margin-top: 1rem;
    }
  }

</style>
