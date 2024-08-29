# Stores

Before we begin with anything specific about the Architecture, 
we will start with the fundamental part that makes the GUI:
[Svelte Stores](https://svelte.dev/docs/svelte-store).

> "A store is simply an object with a subscribe method that allows interested parties to be notified whenever the store
> value changes."—Official Svelte Tutorial—August 24th 2024.

Stores will automatically update the front-end that subscribes to them. You can even use their syntactic sugar to save
you the code bloat and the danger of a memory leak (if you forget to unsubscribe): `$store`. They can be accessed
globally and have multiple appearances across the front-end of the GUI, as well as being changed by multiple sources.

```html
<script lang="ts">
    const count = writable(0);

    // anything may update the store here or outside this file...
</script>

<!-- The line below will get re-rendered every -->
<!-- time you change the value of this store-->
<p>the count is: {$count}</p>
```

## Usage within the Serpenta GUI

All data that is received,
parsed and distributed by an implementation of a [Grand Data Distributor](Data-Distributor.md) is maintained within fsm_store_name.
However, Serpenta uses its own interface that extends the svelte fsm_store_name with additional
information that is closely tied to the received values.

```Typescript
class Store<T> {
    /* convert the received  */
    public readonly processFunction: dataConvFun<T>;
    private _value: T;
    private _style: string;
    private _units: string;
    private _timestamp: number;
    ...
}

export type dataConvFun<T> = (data: number, old:T) => T;
```
