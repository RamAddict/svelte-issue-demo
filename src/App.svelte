<svelte:options tag="cool-page" />
<svelte:element this="style">{@html css}</svelte:element>
<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import ChangeColor from "./lib/ChangeColor/ChangeColor.svelte";
  /**@ts-ignore*/
  import css from "./assets/app.postcss";
  import { btnStore } from "./lib/store";

</script>

<div class="font-sans">
  Hello!
  <Counter bind:btn={$btnStore[0]}/>
  <ChangeColor />
</div>

<style>

</style>
