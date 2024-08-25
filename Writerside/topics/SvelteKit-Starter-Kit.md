# SvelteKit Starter Kit

<primary-label ref="serpenta-starter-kit"/>

The Serpenta Started kit provides a project with SvelteKit, Tauri and several other dependencies defined in its
`project.json` and `Cargo.toml` files. This is the preferable way to start a new project that will use the Serpenta
Standard. Additionally, it sets up the routes for its [Multi-Window Engine](Multi-window-Engine.md).

The project is situated under the [packages folder of the Serpenta monorepo](https://github.com/delft-hyperloop/serpenta/tree/main/packages/serpenta-app). It has the entire folder structure in
its child `template` folder. Upon execution of the script, these will be synced to a child folder of the one where this
binary is run. 

> Please be careful when maintaining the file. If publishing takes a long while, then something big has made its way
> within the `template` folder, and it is not ignored by npm.
{style="warning"}

While the setup provides some examples of how one can render data and fetch it from the Tauri backend, the implementation
of the communication middleware is left for the developer. For ideas, you can look at the [DH08's Serpenta GUI](https://github.com/delft-hyperloop/Helios_III/tree/main/gs).

## Usage

You can create a new Serpenta project using its npm binary like so:

```Shell
npx @delft-hyperloop/create-serpenta-app [name]
cd [name]
npm i
```
