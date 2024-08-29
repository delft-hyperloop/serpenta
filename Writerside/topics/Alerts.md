# Alerting over events

<primary-label ref="tauri-starter-kit"/>

Using the [Tauri event listeners](https://tauri.app/v1/guides/features/events),
one can listen for specific events on an error or warning channel
and trigger alerts using the already integrated [Skeleton Toast](https://www.skeleton.dev/utilities/toasts).

## Basic setup

(not included in Serpenta)

```html
<script lang="ts">
    import { getToastStore } from '@skeletonlabs/skeleton';
    import { listen } from "@tauri-apps/api/event";
    
    const toastStore = getToastStore();  
    const unlisten = listen('error_channel', event => {
        toastStore.trigger({
          message: event.payload.message,
          background: 'variant-filled-error',
        })
    });
    
    // free memory
    onDestroy(() => unlisten);
</script>
```

It is up to the backend to implement the trigger that will send a message to this event.
