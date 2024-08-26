import { writable, type Writable } from "svelte/store";
import { ErrorStatus, PlotBuffer } from "$lib";
import type { DataDistributor, WindowEngine, CommandInvocation } from "$lib";

/**
 * Serpenta configuration object
 */
export interface SerpentaConfig {
    appWindow: any;
    pod_name: string;

    grand_data_distributor: DataDistributor;
    window_engine: WindowEngine<any>;
    command_invocation: CommandInvocation;
    grand_charter?: Writable<Map<string, PlotBuffer>>;

    big_error?: Writable<ErrorStatus>;
    latest_timestamp?: Writable<number>;

    generic_command_name?: string;
    stores?: {
        fsm_name?: string;
    };
}

export interface FinalizedConfig {
    appWindow: any;
    pod_name: string;

    grand_data_distributor: DataDistributor;
    window_engine: WindowEngine<any>;
    command_invocation: CommandInvocation;
    grand_charter: Writable<Map<string, PlotBuffer>>;

    big_error: Writable<ErrorStatus>;
    latest_timestamp: Writable<number>;

    generic_command_name: string;
    stores: {
        fsm_name: string;
    };
}

export function defineConfig(config: SerpentaConfig): FinalizedConfig {
    return {
        appWindow: config.appWindow,
        pod_name: config.pod_name,

        grand_data_distributor: config.grand_data_distributor,
        window_engine: config.window_engine,
        command_invocation: config.command_invocation,
        grand_charter: config.grand_charter || writable(new Map<string, PlotBuffer>()),

        big_error: config.big_error || writable<ErrorStatus>(ErrorStatus.SAFE),
        latest_timestamp: config.latest_timestamp || writable<number>(0),

        generic_command_name: config.generic_command_name || "send_command",
        stores: {
            fsm_name: config.stores?.fsm_name || "FSMState"
        }
    };
}
