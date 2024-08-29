<script lang="ts">
    import "../app.postcss";
    import { initializeStores } from "@skeletonlabs/skeleton";
    import { SerpentaShell, defineConfig } from "@delft-hyperloop/serpenta";

    initializeStores();

    const latestTimestamp = writable(0);

    setInterval(() => {
        latestTimestamp.set(Date.now());
    }, 1000);

    import { appWindow } from "@tauri-apps/api/window";
    import { writable } from "svelte/store";
    import { GrandDataDistributor } from "$lib/util/GrandDataDistributor";
    import { WindowCreator } from "$lib/util/WindowControl";
    import { CommandInvoker } from "$lib/util/CommandInvoker";
    import { listen } from "@tauri-apps/api/event";
    import { invoke } from "@tauri-apps/api/tauri";
    import { onDestroy } from "svelte";

    const gdd = GrandDataDistributor.getInstance();
    gdd.registerStore("Datatype1", 0, undefined, "V");
    gdd.registerStore("Datatype2", 0, undefined, "V");
    gdd.registerStore("Datatype3", 0, undefined, "V");
    gdd.registerStore("Datatype4", 0, undefined, "V");
    gdd.registerStore("Datatype5", 0, undefined, "V");
    gdd.registerStore("Datatype6", 0, undefined, "V");
    gdd.registerStore("Datatype7", 0, undefined, "V");
    gdd.registerStore("FSMState", 0);

    const wm = new WindowCreator();
    const ci = new CommandInvoker();

    const config = defineConfig({
        appWindow: appWindow,
        pod_name: "Helios III",

        // @todo: see if you will use the default grand data distributor - K.P.
        data_distributor: gdd,
        window_engine: wm,
        command_invocation: ci,
        latest_timestamp: latestTimestamp
    });

    // shortcut engine
    const unlisten = listen('shortcut_channel', (event: { payload: string }) => parseShortCut(event.payload));

    const parseShortCut = async (shortcut:string):Promise<void> => {
        const tabMatch = shortcut.match(/^tab_(\d)$/);
        if (shortcut === "emergency_brake") {
            console.log("Emergency brake");
            await invoke('send_command', {cmdName: "EmergencyBrake", val: 0});
        } else if (shortcut === "heartbeat") {
            await invoke('send_command', {cmdName: "FrontendHeartbeat", val: 0});
        }
    }

    onDestroy(() => unlisten);

    //
</script>

<SerpentaShell config={config}>
    <slot />
</SerpentaShell>

