<script lang="ts">
  import './ProjectSection.scss';

  export let url: string;
  export let imageSrc: string;
  export let text: string;
  export let title: string = '';
</script>

<li>
  <a class="work__project-section-list-item" href={url} aria-label="Go to page">
    <img
      class="work__project-section-list-item-image"
      src={imageSrc}
      alt="imdi homepage"
    />
    <div class="work__project-section-list-item-text">
      {#if title}
        <h4>{title}</h4>
      {/if}
      <p>
        {text}
      </p>
    </div>
  </a>
</li>
