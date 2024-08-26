<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import "uplot/dist/uPlot.min.css";
    import { getSerpentaContext, PlotBuffer, PopupIcon } from "$lib";

    const context = getSerpentaContext();
    const grandCharter = context.grand_charter;
    const windowEngine = context.window_engine;

    function popoutWindow() {
        windowEngine.spawnWindow(title, `/view/chart/${title}`);
    }

    export let title: string;
    export let background: string = "bg-surface-800";
    export let height: number = 200;
    export let chart: PlotBuffer | undefined = $grandCharter.get(title);
    export let pop_up: boolean = true;

    let width: number;
    let resize = (width: number, height: number) => {
        chart?.setSize(plotContainer, width - 15, height);
    };

    $: resize(width, height);

    let plotContainer: HTMLDivElement;

    onMount(async () => {
        chart?.draw(plotContainer);
        resize(width, height);
    });

    onDestroy(() => {
        chart?.destroy(plotContainer);
    });
</script>

{#if chart}
    <div bind:clientWidth={width} class="flex flex-col {background} rounded-md pt-2 {width < 550 ? 'text-sm' : ''}">
        <div class="flex gap-2 ml-6">
            <h4 class="text-md text-primary-100">{title}</h4>
            <span class="font-mono"></span>
            {#if pop_up}
                <button on:click={popoutWindow}>
                    <PopupIcon />
                </button>
            {/if}
        </div>
        <div class="flex flex-col justify-center items-center w-full">
            <div class="rounded-md" bind:this={plotContainer} />
        </div>
    </div>
{:else}
    <p>CHART {title} NOT FOUND</p>
{/if}
