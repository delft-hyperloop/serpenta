# Data Distributor

The data distributor interface of the middleware configuration is responsible for distributing the fsm_store_name where 
needed, updating them as necessary.
This object must be start-able, kill-able and have all required methods to update, get and register the fsm store.

## Usage and place in the architecture

The Data Distributor was born as an idea when deciding on how to receive data from the pod over to the GUI. 
Because a lot of data has to be available anywhere at any time and updated immediately throughout the UI, a system for
managing the income of all new data points and supplying them to any element was necessary. 

This led to the creation of the `Grand Data Distributor`, which functioned as middleware between the Tauri backend
and the frontend of the DH08 GUI.
To allow for dependency injection as previously mentioned in the [architecture article](Architecture.md), 
an interface allowing for it was created—the Data Distributor.

### Implementation in the Tauri Starter Kit

When creating the provided [Tauri Starter Kit](Tauri-Starter-Kit.md), the implementation of the data distributor is 
done by using the Grand Data Distributor implementation used in the real DH08 GUI.
The option to swap it out for a different implementation still exists if desired. 

## Reference

Below are the TSDoc comments of each method or field part of this interface.

### Methods

#### `start(interval: number): void;`

Start the data distributor middleware.
This function is expected to trigger a repeated data fetching operation with 
the frequency determined by the interval parameter.

**Params:**
- interval: the interval between each fetching

> This method will be called exactly once when initiating the `<Serpenta Shell/>`

#### `fetchTestOnce(): Promise<void>;`

Fetch data from the Tauri backend exactly once.
The interface requires such a method for testing purposes.

#### `kill(): void;`

Kill the data distributor and stop its operation, clearing any intervals.
This shall free all the memory used by the `DataDistributor` implementing class.

#### `registerStore<T>(...): void`

Register a store inside the Data Distributor.
This function will add the store as a member of the distributor's collection and can be retrieved by its name further
in the application.

**Params:**

- name: the name of the store
- initial: initial value of the store
- processFunction: the function to process the data
- initialUnits: units of the store

**Type params:**

- T: the type of the value inside the Store

#### `updateStore(...): void;`

Update a store inside the Data Distributor.

**Params:**
- name: the name of the store
- style: the style of the store as to what colour it shall become
- units: the units of this store. These do not get changed often but are sent from the config, so they are kept.
- data: the data to update the store with

#### `getWritable<T>(name: string): Writable<Store<T>>;`

Gets the writable (value that can be subscribed to in Svelte) given its name.

**Params:**
- name: the name of the store whose writable will be grabbed.
