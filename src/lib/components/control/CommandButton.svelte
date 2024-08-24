<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri";
    import util from "$lib/util.js";
    import { getContext } from "svelte";
    import type { FinalizedConfig } from "$lib/appShell/SerpentaConfig";

    export let className: string = "";
    export let cmd: string;
    export let val: number = 0;
    export let callback: (val: number) => void = () => {};
    export let text: string = "";

    const config: FinalizedConfig = getContext<FinalizedConfig>("serpenta-config");

    let send = async () => {
        await invoke(config.generic_command_name, { cmdName: cmd, val })
            .then(() => {
                console.log(`Command ${cmd} sent with val: ${val}`);
                util.log(`Command ${cmd} sent with val: ${val}`, config.channel.info);
            })
            .catch(e => {
                console.error(`Error sending command ${cmd} with val \`${val}\`: ${e}`);
                util.log(`Error sending command ${cmd} with val \`${val}\`: ${e}`, config.channel.error);
            });
        callback(val);
    };
</script>

<button
    class="btn rounded-md font-number font-medium {className ? className : 'py-2 bg-primary-500 text-surface-900'}"
    on:click={send}
>
    {text ? text : util.snakeToCamel(cmd)}
</button>
