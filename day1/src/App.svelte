<script>
  import Counter from './lib/Counter.svelte'
  import data from "../data.json"

</script>

<main>
  <div class="container">
  Hello World..
  </div>
</main>

<style>

:global(*) {
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
		margin: 0;
    border: 0;
    box-sizing: border-box;
    background-color: hsl(239, 57%, 85%);
    font-family: 'Rubik', sans-serif;
    line-height: 1.6;
	}

  .container {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    padding: 1rem;

  }

</style>
