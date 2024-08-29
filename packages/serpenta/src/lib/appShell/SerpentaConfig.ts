import { writable, type Writable } from "svelte/store";
import { ErrorStatus, PlotBuffer } from "$lib";
import type { DataDistributor, WindowEngine, CommandInvocation } from "$lib";
import { getContext } from "svelte";

/**
 * Serpenta configuration object
 */
export interface SerpentaConfig {
    appWindow: any;
    pod_name: string;

    data_distributor: DataDistributor;
    window_engine: WindowEngine<any>;
    command_invocation: CommandInvocation;
    grand_charter?: Writable<Map<string, PlotBuffer>>;

    big_error?: Writable<ErrorStatus>;
    latest_timestamp?: Writable<number>;

    generic_command_name?: string;
    fsm_store_name?: string;
}

export interface FinalizedContext {
    appWindow: any;
    pod_name: string;

    data_distributor: DataDistributor;
    window_engine: WindowEngine<any>;
    command_invocation: CommandInvocation;
    grand_charter: Writable<Map<string, PlotBuffer>>;

    error_status: Writable<ErrorStatus>;
    latest_timestamp: Writable<number>;

    pod_command_name: string;
    fsm_store_name: string;
}

export function defineConfig(config: SerpentaConfig): FinalizedContext {
    return {
        appWindow: config.appWindow,
        pod_name: config.pod_name,

        data_distributor: config.data_distributor,
        window_engine: config.window_engine,
        command_invocation: config.command_invocation,
        grand_charter: config.grand_charter || writable(new Map<string, PlotBuffer>()),

        error_status: config.big_error || writable<ErrorStatus>(ErrorStatus.SAFE),
        latest_timestamp: config.latest_timestamp || writable<number>(0),

        pod_command_name: config.generic_command_name || "send_command",
        fsm_store_name: config.fsm_store_name || "FSMState"
    };
}

/**
 * Get the Serpenta context from within the `<SerpentaShell>` base component.
 * @note this will return null if not called within the serpenta shell.
 */
export function getSerpentaContext(): FinalizedContext {
    return getContext<FinalizedContext>("serpenta-context");
}
