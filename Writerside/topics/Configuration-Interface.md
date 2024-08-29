# Configuration Interface

Built to allow for dependency injection and modularity, the `<SerpentaShell />` component takes a configuration prop
which is set as context for all its children (recursively).
Context in Svelte can be set by a parent component, and all the children nested within have access to it.

## Interface

The config itself has the following interface:

### Properties {collapsible="true"}

Each of these properties can be accessed by calling the `getSerpentaContext()` command within a component nested
inside the `<SerpentaShell>` one.

> If the component is not living inside the shell, get context will return an empty object.
> What's more, the context is set with the key "serpenta-context" which shall not appear for any other context within
> the shell or its children.

| name               | type                                | comments                                                                                                 |
|--------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| `appWindow`        | `any`                               | Interface for controlling the native app window. Used to make the custom title bar.                      |
| `pod_name`         | `string`                            | The name of the hyperloop pod. Used in the bottom bar.                                                   |
| `data_distributor` | `WindowEngine<any>`                 | The windowing engine interface, used to spawn a window e.g. containing a chart                           |
| `window_engine`    | `CommandInvocation`                 | Interface for invoking commands to the app backend.                                                      |
| `grand_charter`    | `Writable<Map<string, PlotBuffer>>` | A map of all charts used inside the Serpenta UI.                                                         |
| `error_status`     | `Writable<ErrorStatus>`             | Store of a error status: 0 - safe, 1 - warning, 2 - unsafe. Used to light the shell for abnormal status. |
| `latest_timestamp` | `Writable<number>`                  | The latest timestamp (the current moment) used to paint stale data.                                      |
| `pod_command_name` | `string`                            | The name of the command that sends a message/command to the pod itself.                                  |
| `fsm_store_name`   | `string`                            | The name of the store that holds the active state of the FSM.                                            |

## Usage within the UI kit

All Serpenta components shall get data that shall be configurable from this context by using the following:

```html
<!-- AnyComponent.svelte -->
<script lang="ts">
    import { getSerpentaContext } from "@delft-hyperloop/serpenta";

    const context = getSerpentaContext();
</script>
```

You will have to use this component inside the `<SerpentaShell />` parent component. 
When using SvelteKit, this can easily be done by wrapping the entire body of the app within this component inside 
the root `+layout.svelte` route:

```html
<!-- routes/+layout.svelte -->
<script lang="ts">
    import { 
        SerpentaShell,
        defineConfig 
    } from "@delft-hyperloop/serpenta";
    
    const config = defineConfig(...); 
</script>

<!-- short for <SerpentaShell config={config}> -->
<SerpentaShell {config} >    
    <slot />
</SerpentaShell>
```

Now all inner pages will be loaded within the shell component because of the Svelte slots 
