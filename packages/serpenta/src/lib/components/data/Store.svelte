<script lang="ts">
    import { getContext } from "svelte";
    import type { FinalizedConfig } from "$lib/appShell/SerpentaConfig";
    import { type DataDistributor } from "$lib";

    const config: FinalizedConfig = getContext<FinalizedConfig>("serpenta-config");
    const latestTimestamp = config.latest_timestamp;
    const gdd: DataDistributor = config.grand_data_distributor;

    const STALE_DATA_TICKS = 10_000;
    export let datatype: string;
    const store = gdd.getWritable(datatype);

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
