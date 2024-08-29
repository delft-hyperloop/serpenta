# Windowing Engine

The windowing engine interface acts as a trigger to allow for the spawning of new windows with information.
This was done to make Serpenta a multi-monitor,
multi-window GUI—elements we consider critical for a safe and efficient mission-critical GUI.

## External "requirements" for windowing {collapsible="true"}

Because the original implementation used Tauri, the windowing engine relied on the Tauri window api.
Creating new windows is done by specifying the route of the page which is to be loaded in the new window.
The implementation of the interface was based around this.

Therefore, you are provided with url and a label when creating a window. 
This can still be easily adapted to any implementation.
Extraction of identifying elements (e.g. id) can be done from the url, 
which can then be used to determine what data to load even without using separate routes.

## Usage and place in the architecture

The windowing feature came very late in the original DH08 GUI, only being created during the starting days of the EHW.
It allows for spawning of additional windows to be put on different monitors for a multi-monitor setup.

### Implementation in the Tauri Starter Kit

When creating the provided [Tauri Starter Kit](Tauri-Starter-Kit.md), the implementation of the windowing engine is
done by using the Tauri api for windows as done in the real DH08 GUI.
The option to swap it out for a different implementation still exists if desired.

## Reference

Below are the TSDoc comments of each method or field part of this interface.

### Methods

#### `spawnWindow(...): void;`
Spawn a window given options of a generic type, url and a label.

**Params:**
- url: the url of the page that will be loaded in the new window.
- label: the label of the window in the title bar.
- options: options when defining the window. (optional)

**Type params:**
- OPTION: the type that defines the `options` parameter.
Can be used to determine what additional data can be passed when spawning a window.

