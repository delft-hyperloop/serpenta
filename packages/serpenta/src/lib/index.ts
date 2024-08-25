// Reexport your entry components here

import CommandButton from "$lib/components/control/CommandButton.svelte";
import TauriCommandButton from "$lib/components/control/TauriCommandButton.svelte";
import ToggleCommandButton from "$lib/components/control/ToggleCommandButton.svelte";
import Status from "$lib/components/data/Status.svelte";
import Battery from "$lib/components/graphic/Battery.svelte";
import FSM from "$lib/components/graphic/FSM.svelte";
import Localiser from "$lib/components/graphic/Localiser.svelte";
import Pneumatics from "$lib/components/graphic/Pneumatics.svelte";
import BottomBar from "$lib/components/page/BottomBar.svelte";
import Tile from "$lib/components/page/Tile.svelte";
import TileGrid from "$lib/components/page/TileGrid.svelte";
import TitleBar from "$lib/components/page/TitleBar.svelte";
import Chart from "$lib/components/data/Chart.svelte";
import Store from "$lib/components/data/Store.svelte";
import Table from "$lib/components/data/Table.svelte";
import SerpentaShell from "$lib/appShell/SerpentaShell.svelte";
import PanelBase from "$lib/appShell/PanelBase.svelte";
import { PlotBuffer, StrokePresets } from "$lib/PlotBuffer";
import type { DataDistributor } from "$lib/middleware/DataDistributor";
import util from "$lib/util";
import { ViewWindow } from "./middleware/WindowControl";
import { defineConfig, type SerpentaConfig } from "$lib/appShell/SerpentaConfig";

/**
 * Function to convert data received at DATAPOINT.value to a given type
 */
export type dataConvFun<T> = (data: number, old: T) => T;

export enum ErrorStatus {
    SAFE,
    WARNING,
    UNSAFE
}

export {
    CommandButton,
    TauriCommandButton,
    ToggleCommandButton,
    Status,
    Battery,
    FSM,
    Localiser,
    Pneumatics,
    BottomBar,
    Tile,
    TileGrid,
    TitleBar,
    Chart,
    Store,
    Table,
    PlotBuffer,
    type DataDistributor,
    PanelBase,
    util,
    ViewWindow,
    SerpentaShell,
    type SerpentaConfig,
    defineConfig,
    StrokePresets
};