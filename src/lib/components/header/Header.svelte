<script>
	import "./header.scss";
	let sections = ['me', 'skills', 'work'];
</script>

<header>
	<nav>
		<ul>
			{#each sections as section (section)}
				<li><a href={`#${section.replace(' ', '-')}`}>{section}</a></li>
			{/each}
		</ul>
	</nav>
</header>