# Command Invoker

The command invoker interface abstracts and decouples the functionality of calling commands to the backend.

## Two types of commands {collapsible="true"}

It is important to note the difference in the underlying split between types of commands:

- Pod command (used in the `<PodCommandButton>`): a command that acts like a message to the pod.
  These commands are entirely meant as communication to the pod from the GUI.
- Backend command (used in the `<BackendCommandButton>`): a command that triggers auxiliary backend functionality (e.g.
  loading procedures, stopping the server, initiating connection, etc.)

> Despite this, the interface of the Command Invoker has a single method to invoke a command.
> The actual implementation of the difference is done by specifying the name of the function for triggering such
> a pod message command inside the `SerpentaConfig` using the `pod_command_name` field.
{style="note"}

**Reasoning behind this split:** when developing the DH08 GUI, the initial implementation provided such one command
for sending messages to the pod in the Tauri backend, which acts as simply an intermediary between the pod and the GUI.
Other commands meant to change the state of the backend or trigger different functionality were implemented as separate
Tauri commands.

## Usage and place in the architecture

The original GUI used Tauri, and the necessity for such an interface was not apparent at first.
To support Serpenta for different stacks,
the actual implementation of communication to a backend was decoupled from the Serpenta UI kit logic.

### Implementation in the Tauri Starter Kit

When creating the provided [Tauri Starter Kit](Tauri-Starter-Kit.md), the implementation of the command invoker is
done by using the Tauri api for commands as done in the real DH08 GUI.
The option to swap it out for a different implementation still exists if desired.

## Reference

Below are the TSDoc comments of each method or field part of this interface.

### Methods

#### `invokeCommand<T>(...):Promise<T>;`

Invoke a command given its name/identifier and an object of arguments.

**Params:**
- commandName: the name/identifier of the command to be executed.
- args: the arguments with which the command will be called.
They are of the type `Record<string, unknown>` because they will take an
object representing the arguments we call the command with.

**Type params:**

- T: the return type of the invoked command.

**Returns:**
a Promise of type T—the return type of the command itself.

**Example:**

If we were to call a function (in an arbitrary language) that takes
arguments (width: integer, height: integer, label: string) which returns an integer,
we will call this `invokeCommand` method as:

```Typescript
const res:number = await invokeCommand<number>("function_name", {
     width: 4,
     height: 5,
     label: "Rectangle"
});
```
