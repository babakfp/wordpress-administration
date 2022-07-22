<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message,
      }
    }
  }
</script>

<script>
  export let status
  export let message
</script>

<h1 class="text-center text-6xl font-black">{status}</h1>

<p class="text-center text-sm mt-2">{message}</p>
