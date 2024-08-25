<script>
    import { Pane, Splitpanes } from "svelte-splitpanes";
</script>

<Splitpanes theme="modern-theme" dblClickSplitter={false}>
    <Pane maxSize={50} snapSize={10} minSize={2} size={40} class="rounded-md bg-surface-700">
        <slot name="VITALS_PANEL" />
    </Pane>
    <Pane minSize={50} class="rounded-md bg-surface-900">
        <Splitpanes horizontal={true} theme="modern-theme-logs" dblClickSplitter={false}>
            <Pane minSize={50} class="bg-surface-800">
                <slot name="DETAILS_PANEL" />
            </Pane>
            <Pane size={30} snapSize={10} minSize={5} class="bg-surface-800">
                <slot name="LOGS_PANEL" />
            </Pane>
        </Splitpanes>
    </Pane>
</Splitpanes>
