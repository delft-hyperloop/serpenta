<script lang="ts">
    import { onMount } from "svelte";
    import { ErrorStatus, type DataDistributor, getSerpentaContext } from "$lib";
    import type { Writable } from "svelte/store";

    const context = getSerpentaContext();
    const gdd: DataDistributor = context.data_distributor;
    const bigErrorStatus: Writable<ErrorStatus> = context.error_status;
    const fsmStateName: string = context.fsm_store_name.fsm_name;
    const podName: string = context.pod_name;

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
