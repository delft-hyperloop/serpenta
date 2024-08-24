<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri";
    import util from "$lib/util.js";
    import { getContext } from "svelte";

    export let className: string = "";
    export let cmd: string;
    export let val: number = 0;
    export let callback: (val: number) => void = () => {};
    export let text: string = "";

    const generic_command_name: string = getContext<string>("serpenta-context-generic_command_name");
    const infoChannel: string = getContext<string>("serpenta-context-channel-info");
    const errorChannel: string = getContext<string>("serpenta-context-channel-error");

    let send = async () => {
        await invoke(generic_command_name, { cmdName: cmd, val })
            .then(() => {
                console.log(`Command ${cmd} sent with val: ${val}`);
                util.log(`Command ${cmd} sent with val: ${val}`, infoChannel);
            })
            .catch(e => {
                console.error(`Error sending command ${cmd} with val \`${val}\`: ${e}`);
                util.log(`Error sending command ${cmd} with val \`${val}\`: ${e}`, errorChannel);
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
