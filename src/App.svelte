<script>
	import Clock from "./clock/Clock.svelte";

	export let name;
</script>

<style>
	.clock {
		min-width: 500px;
		min-height: 500px;
	}
</style>

<section class="clock">
	<Clock />
</section>



