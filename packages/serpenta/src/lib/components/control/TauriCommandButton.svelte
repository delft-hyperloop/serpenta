<script lang="ts">
    import { util } from "$lib";
    import { getContext } from "svelte";
    import type { FinalizedConfig } from "$lib/appShell/SerpentaConfig";

    export let className: string = "";
    export let cmd: string;
    export let options: Record<string, unknown>;

    export let successCallback: (r: any) => void = () => {};
    export let errorCallback: (error: string) => void = () => {};
    export let textOverride: string = "";

    const config = getContext<FinalizedConfig>("serpenta-config");
    const commandInvoker = config.command_invocation;

    export let send = async () => {
        console.log(`Sending command: ${cmd} with options ${options}`);
        await commandInvoker.invokeCommand(cmd, options)
            .then(r => {
                console.log(`Command ${cmd} sent with response: ` + r);
                return r ? successCallback(r) : errorCallback(r as string);
            })
            .catch(e => {
                console.error(`Error sending command ${cmd}: ${e}`);
                errorCallback(e);
            });
    };
</script>

<button
    class="btn [&>*]:pointer-events-none rounded-md font-number font-medium
               {className ? className : 'py-2 bg-primary-500 text-surface-900'}"
    on:click={send}
>
    {textOverride === "" ? util.snakeToCamel(cmd) : textOverride}
</button>
