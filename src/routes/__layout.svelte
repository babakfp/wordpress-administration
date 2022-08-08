<script>
  import '../lib/css/app.css'
	import Header from '$partials/Header'
	import SideNav from '$partials/SideNav'
</script>

<Header />
<div class="max-w-screen-xl min-h-screen-header mx-auto sm:flex">
	<SideNav />
	<main class="container pt-8 pb-12 | relative">
		<slot />
	</main>
</div>
