<script lang="ts">
    import {invoke} from '@tauri-apps/api/tauri';
    import { getContext } from "svelte";
    import { util } from "$lib";

    export let offCmd: string;
    export let onCmd: string;
    export let val: number = 0;
    export let callback: (val:number) => void = () => {};
    export let disabled: boolean = false;

    // for binding
    export let status: boolean = false;

    const infoChannel: string = getContext<string>("serpenta-context-channel-info");
    const errorChannel: string = getContext<string>("serpenta-context-channel-error");

    const toggleOff = () => {
        invoke('send_command', {cmdName:offCmd, val}).then((r) => {
            if (r) {
                status = false;
                util.log(`send command ${offCmd} worked`, infoChannel);
                callback(val);
            } else {
                util.log(`send command ${offCmd} failed`, errorChannel);
            }
        });
    };

    const toggleOn = () => {
        invoke('send_command', {cmdName:onCmd, val}).then((r) => {
            if (r) {
                status = true;
                util.log(`send command ${onCmd} worked`, infoChannel);
                callback(val);
            } else {
                util.log(`send command ${onCmd} failed`, errorChannel);
            }
        });
    };
</script>

<div class="flex">
    <button class="btn rounded-none rounded-l-lg font-number py-2 text-surface-50 bg-surface-700"
            class:active={!status}
            on:click={toggleOff}
            disabled={disabled}>
        Off
    </button>
    <button class="btn rounded-none rounded-r-lg font-number py-2 text-surface-50 bg-surface-700"
            class:active={status}
            on:click={toggleOn}
            disabled={disabled}>
        On
    </button>
</div>

<style lang="scss">
  .active {
    background-color: rgb(77, 156, 137);
  }
</style>
