<script lang="ts">
    import '../app.postcss';
    import { initializeStores } from '@skeletonlabs/skeleton';
    import { SerpentaShell, defineConfig, PlotBuffer, StrokePresets } from '@delft-hyperloop/serpenta';

    initializeStores();

    const latestTimestamp = writable(0);

    setInterval(() => {
        latestTimestamp.set(Date.now());
    }, 1000);

    import { appWindow } from '@tauri-apps/api/window';
    import { writable } from "svelte/store";
    import { GrandDataDistributor } from "../lib/util/GrandDataDistributor";

    const config = defineConfig({
        appWindow: appWindow,
        pod_name: 'Helios III',

        // @todo see if you will use the default grand data distributor.
        grand_data_distributor: GrandDataDistributor.getInstance(),
        latest_timestamp: latestTimestamp
    });
</script>

<SerpentaShell config={config}>
    <slot />
</SerpentaShell>

