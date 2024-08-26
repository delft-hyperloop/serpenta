# Configuration Interface

Built to allow for dependency injection, the `<SerpentaShell />` component takes a configuration prop which is set as
context for all its children (recursively). 
All Serpenta components shall get data that shall be configurable from this context by using the following:

```html
<!-- Component.svelte -->
<script lang="ts">
    import { getSerpentaContext } from "$lib";

    const context = getSerpentaContext();
</script>
```

The config itself has a describing interface:
