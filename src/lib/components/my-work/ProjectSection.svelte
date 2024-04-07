<script lang="ts">
  import './ProjectSection.scss';
  import { writable, type Writable } from 'svelte/store';
  import { onMount, tick } from 'svelte';

  export let url: any;
  export let imageSrc: string;
  export let text: string;
  export let title: string = '';

  let largeImageClass: Writable<string> = writable('');

  let element: HTMLElement;
  let distanceFromTop: Writable<number> = writable(0);
  onMount(() => {
    console.log('onMount');
    setupAsyncOperations();
    window.addEventListener('resize', updateDistance);
    window.addEventListener('scroll', updateDistance);

    return () => {
      window.removeEventListener('resize', updateDistance);
      window.removeEventListener('scroll', updateDistance);
    };
  });
  async function setupAsyncOperations() {
    await tick();
    updateDistance();
  }

  function updateDistance() {
    if (element) {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const decimal = rect.top / viewportHeight;
      distanceFromTop.set(decimal);
    }
  }
</script>

<li
  bind:this={element}
  class="project-section"
  style="--distance-from-top: {$distanceFromTop};"
>
  <div class="project-section__image-container">
    {#if !url}
      <button
        class="project-section__image {largeImageClass}"
        on:click={() =>
          largeImageClass.update((className) => (className ? 'enlarge' : ''))}
      >
        <img src={imageSrc} alt="" />
      </button>
    {:else}
      <img class="project-section__image" src={imageSrc} alt="" />
    {/if}
  </div>
  <div class="project-section__text">
    {#if title}
      <h4>{title}</h4>
    {/if}
    <p>
      {text}
    </p>
  </div>
</li>
