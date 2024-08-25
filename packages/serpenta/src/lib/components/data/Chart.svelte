<script lang="ts">
    import { getContext, onDestroy, onMount } from "svelte";
    import "uplot/dist/uPlot.min.css";
    import { PlotBuffer, ViewWindow } from "$lib";
    import Icon from "@iconify/svelte";
    import type { FinalizedConfig } from "$lib/appShell/SerpentaConfig";

    const config: FinalizedConfig = getContext<FinalizedConfig>("serpenta-config");
    const grandCharter = config.grand_charter;

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
                <button on:click={() => ViewWindow.newWindow(title, `/view/chart/${title}`)}>
                    <Icon icon="carbon:popup" />
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
