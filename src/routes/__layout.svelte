<script>
  import '../lib/css/app.css'
	import Header from '$partials/Header'
	import SideNav from '$partials/SideNav'
</script>

<Header />
<div class="max-w-screen-xl mx-auto sm:flex">
	<SideNav />
	<main class="container pt-8 pb-12">
		<slot />
	</main>
</div>

<!-- TODO: This is for PostType layout -->
<!-- <div class="container [ flex items-center justify-between py-6 ] [ border-b border-white border-opacity-5 ]">
	<h1 class="text-xl font-medium">Templates</h1>
	<a class="btn btn--sm btn--brand" href="/">Add New</a>
</div> -->
