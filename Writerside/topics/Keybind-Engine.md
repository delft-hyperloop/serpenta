# Keybinding Engine

<primary-label ref="tauri-starter-kit"/>

The keybinding engine is done via the window event listener.
Once the main window is under focused, any configured keyboard click will be recorded and an identifier will be emitted
over a [Tauri event channel](https://tauri.app/v1/guides/features/events).

On the front-end, an event listener is registered on the event channel `shortcut_channel`. 
A parser function will determine which operation shall be taken:

```Typescript
const parseShortCut = async (shortcut:string):Promise<void> => {
    if (shortcut === "emergency_brake") {
        console.log("Emergency brake");
        await invoke('send_command', {
          cmdName: "EmergencyBrake", 
          val: 0
        });
    } else if (shortcut === "heartbeat") {
        await invoke('send_command', {
          cmdName: "FrontendHeartbeat", 
          val: 0
        });
    }
}
```

What's left for the developer to do is emit the event from the Tauri backend with the identifier of the action.

```Rust
app.emit_all("shortcut_channel", "identifier-here").unwrap();
```


<seealso>
    <category ref="external">
        <a href="https://tauri.app/v1/guides/features/events">Tauri events</a>
    </category>
</seealso>