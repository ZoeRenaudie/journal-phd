<script>
  const email1 = ["zoe.renaudie", "umontreal.ca"].join("@");
  const email2 = ["zoe.renaudie", "gmail.com"].join("@");
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>Pronoms : She/Her/Elle</p>

<p>
  Vous pouvez m'écrire à 
  <a href={`mailto:${email1}`}>umontreal</a> 
  ou 
  <a href={`mailto:${email2}`}>gmail</a>.
</p>

<p>Mes réseaux sociaux :</p>
<ul>
	<li><a href="https://www.linkedin.com/in/zoerenaudie" target="_blank" rel="noopener">LinkedIn</a></li>
	<li><a href="https://www.instagram.com/zoerenaudie" target="_blank" rel="noopener">Instagram</a></li>
</ul>

<p>
  You can write to 
  <a href={`mailto:${email1}`}>umontreal</a> 
  or 
  <a href={`mailto:${email2}`}>gmail</a>.
</p>

<p>Follow me on social media:</p>
<ul>
	<li><a href="https://www.linkedin.com/in/zoerenaudie" target="_blank" rel="noopener">LinkedIn</a></li>
	<li><a href="https://www.instagram.com/zoerenaudie" target="_blank" rel="noopener">Instagram</a></li>
</ul>
