# Configuration Interface

Built to allow for dependency injection, the `<SerpentaShell />` component takes a configuration prop which is set as
context for all its children (recursively). 
All Serpenta components shall get data that shall be configurable from this context by using the following:

```html
<!-- Component.svelte -->
<script lang="ts">
    import { getContext } from "svelte";
    import type { FinalizedConfig } 
        from "$lib/appShell/SerpentaConfig";
    
    const config = getContext<FinalizedConfig>("serpenta-config");
</script>
```

The config itself has a describing interface:

```Typescript
const
```
