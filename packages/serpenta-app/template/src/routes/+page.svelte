<script lang="ts">
    import { PanelBase, Store } from "@delft-hyperloop/serpenta";
</script>

<PanelBase>
    <span slot="VITALS_PANEL">VITALS_PANEL here</span>
    <span slot="DETAILS_PANEL">
        <Store datatype="Datatype1" />
        <Store datatype="Datatype2" />
        <Store datatype="Datatype3" />
        <Store datatype="Datatype4" />
        <Store datatype="Datatype5" />
        <Store datatype="Datatype6" />
        <Store datatype="Datatype7" />
    </span>
    <span slot="LOGS_PANEL">LOGS_PANEL here</span>
</PanelBase>
