<script lang="ts">
    import "../app.postcss";
    import { initializeStores } from "@skeletonlabs/skeleton";
    import { SerpentaShell, defineConfig, PlotBuffer, StrokePresets } from "@delft-hyperloop/serpenta";

    initializeStores();

    const latestTimestamp = writable(0);

    setInterval(() => {
        latestTimestamp.set(Date.now());
    }, 1000);

    import { appWindow } from "@tauri-apps/api/window";
    import { writable } from "svelte/store";
    import { GrandDataDistributor } from "$lib/util/GrandDataDistributor";

    const gdd = GrandDataDistributor.getInstance();
    gdd.registerStore("Datatype1", 0, undefined, "V");
    gdd.registerStore("Datatype2", 0, undefined, "V");
    gdd.registerStore("Datatype3", 0, undefined, "V");
    gdd.registerStore("Datatype4", 0, undefined, "V");
    gdd.registerStore("Datatype5", 0, undefined, "V");
    gdd.registerStore("Datatype6", 0, undefined, "V");
    gdd.registerStore("Datatype7", 0, undefined, "V");
    gdd.registerStore("FSMState", 0);

    const config = defineConfig({
        appWindow: appWindow,
        pod_name: "Helios III",

        // @todo: see if you will use the default grand data distributor - K.P.
        grand_data_distributor: gdd,
        latest_timestamp: latestTimestamp
    });
</script>

<SerpentaShell config={config}>
    <slot />
</SerpentaShell>

