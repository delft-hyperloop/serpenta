import { writable, type Writable } from "svelte/store";
import { ErrorStatus, type DataDistributor, PlotBuffer } from "$lib";

/**
 * Serpenta configuration object
 */
export interface SerpentaConfig {
    appWindow: any;
    pod_name: string;
    grand_data_distributor: DataDistributor;
    big_error?: Writable<ErrorStatus>;
    generic_command_name?: string;
    grand_charter?: Writable<Map<string, PlotBuffer>>;
    latest_timestamp?: Writable<number>;
    channel?: {
        status?: string;
        info?: string;
        warning?: string;
        error?: string;
    };
    stores?: {
        fsm?: string;
    };
}

export interface FinalizedConfig {
    appWindow: any;
    pod_name: string;
    generic_command_name: string;
    grand_data_distributor: DataDistributor;
    big_error: Writable<ErrorStatus>;
    grand_charter: Writable<Map<string, PlotBuffer>>;
    latest_timestamp: Writable<number>;
    channel: {
        status: string;
        info: string;
        warning: string;
        error: string;
    };
    stores: {
        fsm: string;
    };
}

export function defineConfig(config: SerpentaConfig): FinalizedConfig {
    return {
        appWindow: config.appWindow,
        pod_name: config.pod_name,
        grand_data_distributor: config.grand_data_distributor,
        big_error: config.big_error || writable<ErrorStatus>(ErrorStatus.SAFE),
        generic_command_name: config.generic_command_name || "send_command",
        grand_charter: config.grand_charter || writable(new Map<string, PlotBuffer>()),
        latest_timestamp: config.latest_timestamp || writable<number>(0),
        channel: {
            status: config.channel?.status || "info_channel",
            info: config.channel?.info || "info_channel",
            warning: config.channel?.warning || "warning_channel",
            error: config.channel?.error || "error_channel"
        },
        stores: {
            fsm: config.stores?.fsm || "FSMState"
        }
    };
}
