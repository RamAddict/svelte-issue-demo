<svelte:options tag="change-color" />

<script lang="ts">
  import { btnStore } from "../store";

  function handleClick() {
    console.log("please")
    $btnStore[0].classList.add('bg-error')
  }
</script>

<div>
  <button class="btn btn-info" on:click={handleClick}>change color</button>
</div>
