/**
 * Interface for invoking commands from the Serpenta GUI commands components.
 * Requires a single method for invoking commands that takes the command name
 * as well as any arguments this command might take.
 */
export interface CommandInvocation {

    /**
     * Invoke a command given its name/identifier and an object of arguments.
     * @param commandName the name/identifier of the command to be executed.
     * @param args the arguments with which the command will be called.
     * They are of the type `Record<string, unknown>` because they will take an
     * object representing the arguments we call the command with.
     * @typeParam T the return type of the invoked command.
     *
     * @example If we were to call a function (in an arbitrary language) that takes
     * arguments (width: integer, height: integer, label: string) which returns an integer,
     * we will call this `invokeCommand` method as:
     *
     * ```ts
     * const res:number = await invokeCommand<number>("function_name", {
     *      width: 4,
     *      height: 5,
     *      label: "Rectangle"
     * });
     * ```
     * @returns a Promise of type T - the return type of the command itself.
     */
    invokeCommand<T>(commandName:string, args: Record<string, unknown>):Promise<T>;
}