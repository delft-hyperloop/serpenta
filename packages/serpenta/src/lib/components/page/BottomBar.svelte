<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { ErrorStatus, type DataDistributor } from "$lib";
    import type { Writable } from "svelte/store";
    import type { FinalizedConfig } from "$lib/appShell/SerpentaConfig";

    const config: FinalizedConfig = getContext<FinalizedConfig>("serpenta-config");
    const gdd: DataDistributor = config.grand_data_distributor;
    const bigErrorStatus: Writable<ErrorStatus> = config.big_error;
    const fsmStateName: string = config.stores.fsm_name;
    const podName: string = config.pod_name;

    let time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    const fsmState = gdd.getWritable(fsmStateName);
</script>

<footer
    class="text-zinc-100 text-sm {$bigErrorStatus === 0
        ? 'bg-primary-600'
        : $bigErrorStatus === 1
          ? 'bg-warning-500'
          : 'bg-error-500'} w-full flex
               flex-row flex-nowrap justify-between px-4 gap-4 border-t border-black"
>
    <p>Delft Hyperloop: {podName}</p>
    <div class="flex gap-4">
        <p>Current state: {$fsmState.value}</p>
        <p class="">{time}</p>
    </div>
</footer>
