# Configuration Interface

Built to allow for dependency injection, the `<SerpentaShell />` component takes a configuration prop which is set as
context for all its children (recursively). 

## Interface

The config itself has a describing interface:

### Properties {collapsible="true"}

Each of these properties can be accessed by calling the `getSerpentaContext()` command within a component nested
inside the `<SerpentaShell>` one.

> If the component is not living inside the shell, get context will return an empty object. 
> What's more, the context is set with the key "serpenta-context" which shall not appear for any other context within 
> the shell or its children.

| name                     | type                                | comments                                                                            |
|--------------------------|-------------------------------------|-------------------------------------------------------------------------------------|
| `appWindow`              | `any`                               | Interface for controlling the native app window. Used to make the custom title bar. |
| `pod_name`               | `string`                            | The name of the hyperloop pod. Used in the bottom bar.                              |
| `grand_data_distributor` | `WindowEngine<any>`                 |                                                                                     |
| `window_engine`          | `CommandInvocation`                 |                                                                                     |
| `grand_charter`          | `Writable<Map<string, PlotBuffer>>` |                                                                                     |
| `big_error`              | `Writable<ErrorStatus>`             |                                                                                     |
| `latest_timestamp`       | `Writable<number>`                  |                                                                                     |
| `generic_command_name`   | `string`                            |                                                                                     |
| `stores.fsm_name`        | `string`                            |                                                                                     |

## Usage within the UI kit

All Serpenta components shall get data that shall be configurable from this context by using the following:

```html
<!-- Component.svelte -->
<script lang="ts">
    import { getSerpentaContext } from "$lib";

    const context = getSerpentaContext();
</script>
```
