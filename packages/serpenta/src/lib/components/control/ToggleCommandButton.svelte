<script lang="ts">
    import { getSerpentaContext } from "$lib/appShell/SerpentaConfig";

    export let offCmd: string;
    export let onCmd: string;
    export let val: number = 0;
    export let callback: (val: number) => void = () => {};
    export let disabled: boolean = false;

    // for binding
    export let status: boolean = false;

    const commandInvoker = getSerpentaContext().command_invocation;

    const toggleOff = () => {
        commandInvoker.invokeCommand("send_command", { cmdName: offCmd, val }).then(r => {
            if (r) {
                status = false;
                callback(val);
            } else {
                console.error(`send command ${offCmd} failed`);
            }
        });
    };

    const toggleOn = () => {
        commandInvoker.invokeCommand("send_command", { cmdName: onCmd, val }).then(r => {
            if (r) {
                status = true;
                console.error(`send command ${onCmd} worked`);
                callback(val);
            } else {
                console.error(`send command ${onCmd} failed`);
            }
        });
    };
</script>

<div class="flex">
    <button
        class="btn rounded-none rounded-l-lg font-number py-2 text-surface-50 bg-surface-700"
        class:active={!status}
        on:click={toggleOff}
        {disabled}
    >
        Off
    </button>
    <button
        class="btn rounded-none rounded-r-lg font-number py-2 text-surface-50 bg-surface-700"
        class:active={status}
        on:click={toggleOn}
        {disabled}
    >
        On
    </button>
</div>

<style>
    .active {
        background-color: rgb(77, 156, 137);
    }
</style>
