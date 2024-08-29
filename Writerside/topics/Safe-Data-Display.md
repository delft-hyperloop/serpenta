# Safe Data Display

One of the prime Sense & Control scrutineering points was the safe display of data.
This includes highlighting data of abnormal values, data that has not been updated for a while and displaying the units
of the data points attached to them.

## Abnormal values painting
<secondary-label ref="tauri-starter-kit-s"/>

Values that are beyond their safe range will be painted on the screen. 
This is achieved by sending the desired colour of the Store together with its other information.

The original DH08 had a `toml` file with all datatypes defined together with their safe, warning and unsafe ranges.

Example:

```
[[Datatype]]
name = "TotalBatteryVoltageLow"
id = 0x1A5
display_units = "V"
upper = { warn = 3000, err = 3100 }
lower = { warn = 2100, err = 2000 }
```

The backend was to check itself whether where the value is and give it a colour. 
The frontend would then paint the Store accordingly.

Available colours were: "warning", "critical" and the default white.

## Stale data painting

By using the `latest_timestamp` store that updates each second, we compare the timestamp of the received datapoint. 
If a store does not get updated for a while, the 

```html
<!-- Store.svelte -->

<span
  class="text-{$latestTimestamp - $store.timestamp > STALE_DATA_TICKS
            ? 'surface' : ...">
    ...
</span>
```

Normally this store will default to a simple number [Writable](https://svelte.dev/docs/svelte-store#writable).
By using the [Serpenta Config](Configuration-Interface.md)'s `latest_timestamp`
you are also able to overwrite this store.
The feature was primarily designed to support dependency injection and imported testability. 

## Datatypes units display

The final safety feature related to displaying data safely is the data units display.
Stores can store values which represent some kind of measurement or a metric.

> A usual cliché joke in Bulgarian mid-school teachers used to make was to ask "6–7 what? Bananas, pears?" 
> when a student omits the measuring unit in their answer. 

```Typescript
{typeof $store.value === "number"   
    ? $store.value.toFixed(2) : 
        $store.value
}                                   // displaying data
{$store.units}                      // displaying units
```
