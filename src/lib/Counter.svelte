<svelte:options tag="counter-that-counts" />
<script lang="ts">
  export let count: number = 0;
  export let btn: HTMLElement;
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <button on:click={increment} class="btn btn-primary" bind:this={btn}>
    count is {count}
  </button>
</div>
