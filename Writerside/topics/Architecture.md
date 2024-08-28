# Architecture

One of the main goals of Serpenta is to decouple the View as much as possible from the Control; i.e., provide a safe, 
clean and efficient UI library with defined exposed ports and allow for the developer to create their own communication 
with their pod.

However, this would strip away a lot of Serpenta's functionality and purpose. 
To deal with this, an implementation with Tauri was provided additionally in a Tauri Starter Kit.

> Serpenta consists of a UI package, a middleware defined using interfaces and a Tauri realization of said middleware.
> 
> You can override any realization with your own implementation using the [config object](Configuration-Interface.md)
> or entirely swap out the backend for something else other than Tauri.

## Components of a Serpenta System

A Serpenta system includes a frontend built on a Svelte-compatible framework and a backend that powers the app, 
providing necessary functionality for the UI-required interfaces and additional auxiliary features.

> A UI-required interface is one of several interfaces upon which the UI kit works. 
> These include a Data Distributor, Command Invoker and a Windowing Engine.
> 
> Check out more information at the [UI-required interfaces topic](UI-Required-Interfaces.md).
{style="note"}

### Modularity

The entire Running Engine subsystem is replaceable by default, and you may opt to use another engine instead.

> For this you will have to write an entire middleware that implements all required interfaces.
> You can, of course, also choose to implement only specific parts of the configuration. 
> 
> Check out the [Configuration Interface page](Configuration-Interface.md) for more information.

![](serenta-components.png)

## Classes and required interfaces

The entire Tauri Starter subsystem component (or only parts of it) may be swapped for another as mentioned before
in this section.

![](serpenta-detailed.png)
