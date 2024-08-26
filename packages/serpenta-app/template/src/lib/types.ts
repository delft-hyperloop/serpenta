/* AUTO GENERATED USING npm run generate:commands */
export type NamedCommand = "command";
export const NamedCommandValues:NamedCommand[] = ["command"];

/*AUTO GENERATED USING npm run generate:datatypes */
export type NamedDatatype = "Datatype1" | "Datatype2" | "Datatype3" | "Datatype4" | "Datatype5" | "Datatype6" | "Datatype7" | "FSMState";
export const NamedDatatypeValues = ["Datatype1", "Datatype2", "Datatype3", "Datatype4", "Datatype5", "Datatype6", "Datatype7"];
// Not touched by auto-gen

export type Datapoint = {
    datatype: NamedDatatype,
    value: number,
    timestamp: number,
    style: string,
    units: string
}
