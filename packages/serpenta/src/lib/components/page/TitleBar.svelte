<script lang="ts">
    export let appWindow: any;
</script>

<div data-tauri-drag-region class="bg-surface-900 flex justify-between items-center p-1 px-2">
    <div class="flex items-center gap-1">
        <enhanced:img src="/static/images/logo-green.png?w=16" alt="Delft logo" />
        <span class="text-primary-500 font-medium text-xs">DELFT HYPERLOOP</span>
    </div>
    <div class="text-surface-300">
        <button on:click={appWindow.minimize} class="rounded-full bg-surface-800 hover:bg-surface-700 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 14H4v-4h16" />
            </svg>
        </button>
        <button on:click={appWindow.maximize} class="rounded-full bg-surface-800 hover:bg-surface-700 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 4h16v16H4zm2 4v10h12V8z" />
            </svg>
        </button>
        <button on:click={appWindow.close} class="rounded-full bg-surface-800 hover:bg-surface-700 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46z" />
            </svg>
        </button>
    </div>
</div>
