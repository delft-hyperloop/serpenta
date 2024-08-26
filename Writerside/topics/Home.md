# Serpenta

Serpenta is the GUI standard of [Delft Hyperloop](https://www.delfthyperloop.nl/) designed to sustain large amount of
incoming data and present it in a comprehensible, safe and multi-monitor environment.

Serpenta was created in the eighth generation of Delft Hyperloop, and it adheres to all safety scruteneering 
requirements imposed during the 2024 EHW. It builds on top of [Tauri v1](https://tauri.app/) coupled with [SvelteKit](https://kit.svelte.dev/), using their 
APIs to create a common UI component toolkit, data distributor middleware as well as a visual chart manager.

This document (website) covers the usage, architecture and implementation details of the Serpenta Standard, the 
reference of the provided Svelte UI toolkit and several guides.

> This document is meant for software engineers. If you want to learn how to use the app, please refer to the User
> Guide. {style="note"}

## What is Serpenta?

Serpenta is a <tooltip term="GUI standard">GUI standard</tooltip> created and imposed by DH08 for the interface of the
ground station controlling Helios III. It provides:

- a common UI toolkit for displaying data points received from an arbitrary Hyperloop pod
- a configurable middleware for managing data distribution and command issuing to the pod 
- utilities for refreshing and supporting charts

Serpenta is split between a UI kit that is completely decoupled from middleware and a Tauri adaptation of such 
middleware.
Originally, Serpenta ran on Tauri, but its front-end was entirely decoupled from it to allow for more flexibility in 
choosing a compatible tech stack. 

![dh08serpenta.png](dh08serpenta.png){style="block"} _DH08 Serpenta GUI on its Home tab_

## Why is Serpenta?

Serpenta aims to create a reusable, open-source software development kit for creating mission-critical GUI with
SvelteKit coupled with any middleware (e.g., Tauri) and foster a community around it.

Built with 💚 by Kiril Panayotov, Andreas Tsatsanis & Fransisco Amaro - DH08.

<seealso>
    <category ref="related">
        <a href="UI-Toolkit.md">Svelte UI Toolkit</a>
        <a href="Grand-Data-Distributor.md">GDD Interface</a>
        <a href="Grand-Charter.md">Chart manager interface</a>
        <a href="Guides.md">Guides and recipes</a>
    </category>
    <category ref="external">
        <a href="https://tauri.app/">Tauri</a>
        <a href="https://kit.svelte.dev/">SvelteKit</a>
    </category>
</seealso>
