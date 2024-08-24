import type { Writable } from "svelte/store";
import type { dataConvFun } from "$lib";

/**
 * The DataDistributor interface is responsible for fetching data from the backend and distributing
 * it to the appropriate stores.
 * The implementation of such middleware shall be taken into consideration to the requirements specified
 * in the [Architecture article of the Serpenta Developer Handbook](https://delft-hyperloop.github.io/serpenta/architecture.html)
 *
 * @see StateManager
 * @link [Grand Data Distributor entry](https://delft-hyperloop.github.io/serpenta/grand-data-distributor.html) of the
 * Serpenta Developer Handbook.
 */
export interface DataDistributor {
    /**
     * Start the data distributor middleware.
     * This function is expected to trigger a repeated data fetching operation with
     * the frequency determined by the interval parameter.
     * @param interval - the interval in milliseconds
     * @note this method will be called exactly once when initiating the `SerpentaShell`
     */
    start(interval: number): void;

    /**
     * Fetch data from the Tauri backend exactly once.
     * The interface requires such a method for testing purposes.
     */
    fetchTestOnce(): Promise<void>;

    /**
     * Kill the data distributor and stop its operation, clearing any intervals.
     * This shall free all the memory used by the `DataDistributor` implementing class.
     */
    kill(): void;

    /**
     * Get the store manager
     * @note considered refactoring.
     */
    get stores(): StoreManager;
}

/**
 * The StoreManager class is responsible for managing the data stores
 */
interface StoreManager {
    /**
     * Register a store
     * @param name - the name of the store
     * @param initial
     * @param initialUnits
     * @param processFunction - the function to process the data
     */
    registerStore<T>(name: string, initial: T, processFunction?: dataConvFun<T>, initialUnits?: string): void;

    /**
     * Update a store
     * @param name - the name of the store
     * @param timestamp
     * @param style
     * @param units
     * @param data - the data to update the store with
     */
    updateStore(name: string, timestamp: number, style: string, units: string, data: number): void;

    getValue<T>(name: string): T;

    getWritable<T>(name: string): Writable<Store<T>>;
}

/**
 * The Store class is responsible for managing the data store
 * and processing the data before setting it to the store.
 * This allows for processing the data before setting it to the store.
 */
interface Store<T> {
    readonly processFunction: dataConvFun<T>;

    get value(): T;

    get style(): string;

    get units(): string;

    get timestamp(): number;
}
