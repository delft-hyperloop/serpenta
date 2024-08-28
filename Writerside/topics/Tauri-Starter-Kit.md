# Tauri Starter Kit

<primary-label ref="tauri-starter-kit"/>

Serpenta was decoupled from its original Tauri middleware to support different implementations and tech stacks. 
If you choose to use Tauri, we provide a Tauri starter kit in the form of an `npm` binary that creates a project
with the required packages, Tauri and all middleware implemented.

> Despite its preconfiguration, editing and changing this middleware can still be easily achieved.

The project is situated under the [packages folder of the Serpenta monorepo](https://github.com/delft-hyperloop/serpenta/tree/main/packages/serpenta-app). It has the entire folder structure in
its child `template` folder. Upon execution of the script, these will be synced to a child folder of the one where this
binary is run. 

> Please be careful when maintaining the file. If publishing takes a long while, then something big has made its way
> within the `template` folder, and it is not ignored by npm.
{style="warning"}

While the setup provides some examples of how one can render data and fetch it from the Tauri backend, the implementation
of the communication middleware is left for the developer. For ideas, you can look at the [DH08's Serpenta GUI](https://github.com/delft-hyperloop/Helios_III/tree/main/gs).

## Installing & setup

You can create a new Serpenta project using its npm binary like so:

```Shell
npx @delft-hyperloop/create-serpenta-app [name]
cd [name]                                 
direnv allow                          # optional if you use nix flakes
npm i                                 # install dependencies
npm run tauri dev                     # run the tauri app
```

> If you happen to see a blank page with an error saying "Failed to create GBM buffer," this may very well be caused by
> GNOME.
> 
> Please try running the start command with the environment variable `WEBKIT_DISABLE_COMPOSITING_MODE` set to `1`:
> ```Shell
> WEBKIT_DISABLE_COMPOSITING_MODE=1 npm run tauri dev
> ```
{style="note"}

This will create a template directory with SvelteKit,
Tauri setup together with a predefined configuration for Serpenta.

## Features

Upon installation, the Tauri starter kit will provide you with all of these features (which normally are left for 
own custom configuration) implemented:
- A Data Distributor. 
- Windowing Engine
- Command Invoker


