/**
 * Port of spawning windows inside the Serpenta GUI application.
 *
 * @typeParam OPTIONS defines the type of the window's option object.
 * Decouples the implementation of the implementing windowing system.
 */
export interface WindowEngine<OPTIONS> {

    /**
     * Spawn a window given options of a generic type, url and a label.
     * @param url the url of the page that will be loaded in the new window.
     * @param label the label of the window in the title bar.
     * @param options options when defining the window.
     */
    spawnWindow(url: string, label: string, options?: OPTIONS): void;
}

