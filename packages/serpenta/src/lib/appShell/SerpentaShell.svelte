<script lang="ts">

    import { initializeStores, Modal, Toast } from "@skeletonlabs/skeleton";
    import { BottomBar, TitleBar } from "$lib";
    import { onDestroy, setContext } from "svelte";
    import type { FinalizedContext } from "$lib/appShell/SerpentaConfig";

    export let config: FinalizedContext;
    setContext<FinalizedContext>("serpenta-context", config);

    config.grand_data_distributor.start(50);

    initializeStores();

    onDestroy(async () => {
        config.grand_data_distributor.kill();
    });
</script>

<body class="flex flex-col w-screen h-screen max-h-screen overflow-hidden">
    <Toast />
    <Modal />
    <TitleBar appWindow={config.appWindow} />
    <main class="w-full flex-grow border-t border-black overflow-auto">
        <slot />
    </main>
    <BottomBar />
</body>
