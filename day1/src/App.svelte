<script>
  import Counter from './lib/Counter.svelte'
  import data from "../data.json"

import Fa from 'svelte-fa/src/fa.svelte'
import { faPlus, faMinus, faReply } from '@fortawesome/free-solid-svg-icons'

let count = 0


</script>

<main>
  <div class="container">
  <div class="card-container">
    <div class="cards">
      <div class="card">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{count}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src="../src/assets/images/avatars/image-amyrobson.png" slt="image" />
                </div>
                <h4 class="name">amyrobson</h4>
                <span class="time">1 month ago</span>
              </div>
              <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
            </div>

            <div class="card-body">
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </div>
          </div>
          </div>
      </div>




      <div class="card">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{count}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src="../src/assets/images/avatars/image-amyrobson.png" slt="image" />
                </div>
                <h4 class="name">amyrobson</h4>
                <span class="time">1 month ago</span>
              </div>
              <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
            </div>

            <div class="card-body">
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </div>
          </div>
          </div>
      </div>

      <section class="reply-section">
        <div class="line"></div>

        <div class="card card-reply">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{count}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src="../src/assets/images/avatars/image-amyrobson.png" slt="image" />
                </div>
                <h4 class="name">amyrobson</h4>
                <span class="time">1 month ago</span>
              </div>
              <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
            </div>

            <div class="card-body">
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </div>
          </div>
          </div>
      </div>

      <div class="card card-reply">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>

            <span class="counter-number">{count}</span>

            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">
            <div class="top">
              <div class="profile">
                <div class="image-container">
                  <img src="../src/assets/images/avatars/image-amyrobson.png" slt="image" />
                </div>
                <h4 class="name">amyrobson</h4>
                <span class="time">1 month ago</span>
              </div>
              <div class="reply">
                <Fa style="color: #615d9d" icon={faReply} /> <span class="reply-text">Reply</span>
              </div>
            </div>

            <div class="card-body">
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </div>
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
    width: 20px;
    height: 20px;
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
    margin-right: 1rem;
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

</style>
