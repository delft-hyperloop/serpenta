// Reexport your entry components here
import CommandButton from "$lib/components/control/PodCommandButton.svelte";
import TauriCommandButton from "$lib/components/control/BackendCommandButton.svelte";
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
import PopupIcon from "$lib/PopupIcon.svelte";
import { PlotBuffer, StrokePresets } from "$lib/PlotBuffer";
import type { DataDistributor } from "$lib/middleware/DataDistributor";
import type { WindowEngine } from "$lib/middleware/WindowControl";
import util from "$lib/util";
import { defineConfig, getSerpentaContext, type SerpentaConfig } from "$lib/appShell/SerpentaConfig";
import type { CommandInvocation } from "./middleware/CommandInvocation";

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
    PanelBase,
    util,
    SerpentaShell,
    defineConfig,
    getSerpentaContext,
    StrokePresets,
    PopupIcon
};

export type {
    DataDistributor,
    WindowEngine,
    SerpentaConfig,
    CommandInvocation,
}
