<script lang="ts">
    import type { NamedDatatype } from "$lib/types.js";
    import { GrandDataDistributor } from "$lib";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const latestTimestamp = getContext<Writable<number>>("serpenta-context-state-latestTimestamp");

    const STALE_DATA_TICKS = 10_000;
    export let datatype: NamedDatatype;
    const store = GrandDataDistributor.getInstance().stores.getWritable(datatype);

    $: store;
</script>

<span
    class="text-{$latestTimestamp - $store.timestamp > STALE_DATA_TICKS
        ? 'surface'
        : $store.style === 'critical'
          ? 'error'
          : $store.style}-400"
>
    {typeof $store.value === "number" ? $store.value.toFixed(2) : $store.value}
    {$store.units}
</span>
