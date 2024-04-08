<script>
  import Header from '$lib/components/header/Header.svelte';
  import AboutMe from '$lib/components/AboutMe/AboutMe.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import MyWork from '$lib/components/my-work/MyWork.svelte';
  import Me from '$lib/components/Me/Me.svelte';

  import './home.scss';
  import '../global.scss';
</script>

<Header />

<main class="main">
  <Me />
  <AboutMe />
  <Skills />
  <MyWork />
</main>
