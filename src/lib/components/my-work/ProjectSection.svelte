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
    window.addEventListener('resize', updateDistance); // Re-calculate on resize
    return () => {
      window.removeEventListener('resize', updateDistance);
    };
  });
  async function setupAsyncOperations() {
    await tick();
    updateDistance();
  }

  function updateDistance() {
    console.log('distanceFromTop', distanceFromTop);
    if (element) {
      const rect = element.getBoundingClientRect();
      distanceFromTop.set(324);
    }
  }

  console.log('ASDSA');
</script>

<li
  bind:this={element}
  class="project-section"
  style={{ '--distance-from-top': 'asd' }}
>
  <div class="project-section__image-container">
    <h3>Distance from top: {$distanceFromTop}px</h3>
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
