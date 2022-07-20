<script>
	export let label
</script>

<div class="[ flex items-center justify-center ] [ w-4 h-4 ] rounded text-xs
	{(label.type === 'danger') && 'bg-red-500 text-white'}
">
	{label.value}
</div>
