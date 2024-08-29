<script lang="ts">
    import { getSerpentaContext, util } from "$lib";

    export let className: string = "";
    export let cmd: string;
    export let val: number = 0;

    export let successCallback: (r: any) => void = () => {};
    export let errorCallback: (error: string) => void = () => {};
    export let textOverride: string = "";

    const context = getSerpentaContext();
    const commandInvoker = context.command_invocation;

    let send = async () => {
        await commandInvoker.invokeCommand<void>(context.pod_command_name, { cmdName: cmd, val })
            .then(returned => {
                console.log(`Command ${cmd} sent with val: ${val}`);
                successCallback(returned);
            })
            .catch(e => {
                console.error(`Error sending command ${cmd} with val \`${val}\`: ${e}`);
                errorCallback(e);
            });
    };
</script>

<button
    class="btn rounded-md font-number font-medium {className ? className : 'py-2 bg-primary-500 text-surface-900'}"
    on:click={send}
>
    {textOverride ? textOverride : util.snakeToCamel(cmd)}
</button>
