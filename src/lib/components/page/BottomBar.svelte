<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { GrandDataDistributor } from "$lib";
    import type { Writable } from "svelte/store";

    const bigErrorStatus: Writable<number> = getContext<Writable<number>>("serpenta-context-state-bigError");
    const fsmStateName: string = getContext<string>("serpenta-context-stores-fsm");
    const podName: string = getContext<string>("serpenta-context-pod-name");

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

    const storeManager = GrandDataDistributor.getInstance().stores;
    const fsmState = storeManager.getWritable(fsmStateName);
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
