const imports: string =
    'import CommandButton from "$lib/components/control/CommandButton.svelte";\n' +
    'import TauriCommandButton from "$lib/components/control/TauriCommandButton.svelte";\n' +
    'import ToggleCommandButton from "$lib/components/control/ToggleCommandButton.svelte";\n' +
    'import Status from "$lib/components/data/Status.svelte";\n' +
    'import Battery from "$lib/components/graphic/Battery.svelte";\n' +
    'import FSM from "$lib/components/graphic/FSM.svelte";\n' +
    'import Localiser from "$lib/components/graphic/Localiser.svelte";\n' +
    'import Pneumatics from "$lib/components/graphic/Pneumatics.svelte";\n' +
    'import BottomBar from "$lib/components/page/BottomBar.svelte";\n' +
    'import Tile from "$lib/components/page/Tile.svelte";\n' +
    'import TileGrid from "$lib/components/page/TileGrid.svelte";\n' +
    'import TitleBar from "$lib/components/page/TitleBar.svelte";\n' +
    'import Chart from "$lib/components/Chart.svelte";\n' +
    'import SpeedsInput from "$lib/components/SpeedsInput.svelte";\n' +
    'import Store from "$lib/components/Store.svelte";\n' +
    'import Table from "$lib/components/Table.svelte";\n' +
    'import {PlotBuffer} from "$lib/PlotBuffer.js";\n' +
    'import {GrandDataDistributor} from "$lib/GrandDataDistributor.js";\n' +
    'import util from "$lib/util.js";\n' +
    'import type { ViewWindow } from "./WindowControl.js";';

const matches = [...imports.matchAll(/import \{?(\w+)}? from .*/g)];

let res = "export { ";

matches.forEach(match => {
    res += match[1] + ", ";
});

console.log(res.slice(0, res.length - 2) + "} ");
