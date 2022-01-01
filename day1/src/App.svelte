<script>
  import Counter from './lib/Counter.svelte'
  import data from "../data.json"

import Fa from 'svelte-fa/src/fa.svelte'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

let count = 0


</script>

<main>
  <div class="container">
    <div class="cards">
      <div class="card">
        <div class="flex">
          <div class="counter">
            <button class="button" on:click={() => count += 1}>
              <Fa icon={faPlus} />
            </button>
            <span>{count}</span>
            <button class="button" on:click={() => count -= 1}>
            <Fa icon={faMinus} />
            </button>
          </div>

          <div class="card-main">Hello World</div>
          </div>
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

  .cards {
    width: 450px;
    margin: 0 auto;
  }

  .card {
    width: 450px;
    padding: 1rem;
    background-color: hsl(0, 0%, 100%);

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
  }

  span {
    margin: 1rem 0;
  }

  .button {
    cursor: pointer;

  }

  .fa {
    color: red;
  }

</style>
