<script lang="ts">
  import './MyWork.scss';
  import ProjectSection from './ProjectSection.svelte';
  import type { WorkProject } from '$types/types.ts';

  let work: WorkProject[] = [
    {
      name: 'IMDI   2023 - 2024',
      icons: [
        'react.png',
        'typescript.svg',
        'sass.png',
        'storybook.png',
        'dotnet.png',
        'optimizely.png',
      ],
      description:
        'As the lead frontend developer for IMDi, I steered the selection of architectural frameworks, development tools, and methodologies to optimize our workflow and product quality.',
      links: [
        {
          name: 'intro',
          url: 'https://imdi.no',
          imageSrc: '/images/imdi.png',
          title: 'Multi-Site Platform Development and CMS Integration',
          text: 'For IMDi I helped develop a robust, multi-site platform using Optimizely 12, empowering seamless CMS integration for dynamic webpage editing and construction. Engineered a unified React frontend to launch two distinct websites, designed with flexibility to scale and accommodate additional sites in the future.',
        },
        {
          name: 'code',
          imageSrc: '/images/imdi-code.png',
          title: 'Complexity Management in Component Design',
          text: 'The project presented intricate challenges, especially in maintaining code simplicity amidst the necessity for components to adapt based on page context, content, and thematic variations. I implemented a strategic codebase separation, delineating site-specific and shared components, which facilitated a clear mapping of component usage across sites.',
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/imdi-mika.png',
          title: 'Code Optimization and Performance Enhancement',
          text: 'Recognizing the potential for bloated code and assets in multi-site setups, I prioritized optimization. Through effective code splitting techniques, I ensured lean page loads, with each site only requesting code essential to its immediate functionality.',
        },
        {
          name: 'Website',
          imageSrc: '/images/imdi-storybook.png',
          title: 'Code Optimization and Performance Enhancement',
          text: 'Recognizing the potential for bloated code and assets in multi-site setups, I prioritized optimization. Through effective code splitting techniques, I ensured lean page loads, with each site only requesting code essential to its immediate functionality.',
        },
      ],
    },
    {
      name: 'FFO 2022 - 2024',
      links: [
        {
          name: 'Website',
          url: 'https://ffo.no',
          imageSrc: '/images/ffo-home.png',
          text: "Contributed to the creation of FFO's new feature-rich website, enhancing their capacity to deliver extensive content. The website is backed by a Sanity 3 CMS and a dynamic frontend crafted with Next.js 13.",
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/ffo-tabs.png',
          title: 'Performance Optimization',
          text: 'Tackled challenges of optimizing large pages, some exceeding one megabyte of text, to accelerate load times. Implemented Server Components to minimize time to interactivity and reduce JavaScript bundle size, complemented by lazy loading strategies for prioritized content delivery.',
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/ffo-search.gif',
          title: 'Advanced Search Functionality',
          text: 'Engineered a sophisticated search system using Algolia, automating the indexing of documents from Sanity upon publication. Overcame obstacles presented by exceptionally large documents by segmenting them, ensuring seamless indexing. The search results are intelligently displayed in content-specific blocks for intuitive user navigation.',
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/ffo-filters.gif',
          title: 'Dynamic Content Filtering',
          text: 'Developed a versatile content filtering system, supporting complex OR/AND logic across multiple categories and document structures, complete with real-time result counting.',
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/ffo-studio.png',
          title: 'CMS Customization',
          text: 'Enhanced the CMS experience with dynamic editing capabilities and live previews, facilitating the management of an extensive array of pages.',
        },
        {
          name: 'Website',
          url: 'https://imdi.no',
          imageSrc: '/images/ffo-metrics.png',
          title: 'Accessibility',
          text: 'Championed accessibility for FFO, an umbrella organization for disability interest groups in Norway, by meticulously implementing aria attributes and metadata along with thorough screen reader testing. Achieved a commendable 96/100 accessibility score from PageSpeed Insights.',
        },
      ],
    },
  ];
</script>

<section id="my-work">
  <h2>My Work</h2>

  <div class="work-project-list">
    {#each work as { name, links, icons, description } (name)}
      <div class="work__project">
        <h3>{name}</h3>
        {#if icons && icons.length > 0}
          <div class="work__project-icons">
            {#each icons as icon (icon)}
              <img
                class="work__project-icon"
                src={`/icons/${icon}`}
                alt={`${icon} icon`}
              />
            {/each}
          </div>
        {/if}

        {#if description}
          <p class="work__project-description">{description}</p>
        {/if}

        <ul class="work__project-section-list">
          {#each links as projectSection (projectSection.name)}
            <ProjectSection {...projectSection} />
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
