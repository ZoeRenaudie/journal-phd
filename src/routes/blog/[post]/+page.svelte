<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import { onMount, tick } from 'svelte';
	import { base } from '$app/paths';
	import { siteURL } from '$lib/config';
	 
	let { data } = $props();

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories, slug } =
		data.meta;
	const { PostContent } = data;
	const citationDate = typeof date === 'string' ? date.split('T')[0] : date;
	const citationUrl = `https://${siteURL}${base}/blog/${slug}`;

	let postContentEl;

	onMount(async () => {
		await tick();
		if (!postContentEl) return;

		const blocks = postContentEl.querySelectorAll('code.language-mermaid');
		if (blocks.length === 0) return;

		const mermaid = (await import('mermaid')).default;
		mermaid.initialize({ startOnLoad: false, theme: 'neutral' });

		for (const [index, block] of Array.from(blocks).entries()) {
			const container = block.closest('pre') ?? block;
			try {
				const { svg } = await mermaid.render(
					`mermaid-${index}-${Date.now()}`,
					block.textContent
				);
				const wrapper = document.createElement('div');
				wrapper.className = 'mermaid-rendered';
				wrapper.innerHTML = svg;
				container.replaceWith(wrapper);
			} catch (error) {
				console.error('Mermaid render failed:', error);
			}
		}
	});
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<div class="post-content" bind:this={postContentEl}>
		<PostContent />
	</div>

	<aside class="citation-box" aria-label="Référence bibliographique">
		<div class="citation-label">Pour citer</div>
		<p>
			<strong>Renaudie, Zoë.</strong>
			{citationDate || '(date)'}. « {title} ».
			<em>Journal Ph.D. MuseoLog</em>,
			<a href={citationUrl}>{citationUrl}</a>.
		</p>
	</aside>
	
<nav class="post-nav">
  {#if data.previous}
    <a href="{base}/blog/{data.previous.slug}" class="post-nav__prev">
      ← {data.previous.title}
    </a>
  {:else}
    <span></span>
  {/if}

  {#if data.next}
    <a href="{base}/blog/{data.next.slug}" class="post-nav__next">
      {data.next.title} →
    </a>
  {/if}
</nav>

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul class="post-footer__categories">
				{#each categories as category}
					<li>
						<a href="{base}/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style>
	.citation-box {
		margin-top: 2.5rem;
		padding: 1.5rem 1.25rem;
		background: #fffbdc;
		color: #6b6688;
		border-radius: 0.25rem;
		box-shadow: 0 5px 16px rgba(90, 72, 146, 0.07);
	}

	.citation-label {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.9;
		margin-bottom: 0.6rem;
	}

	.citation-box p {
		margin: 0;
		line-height: 1.7;
		font-size: 0.98rem;
	}

	.citation-box a {
		color: #6b6688;
		word-break: break-all;
	}
</style>
