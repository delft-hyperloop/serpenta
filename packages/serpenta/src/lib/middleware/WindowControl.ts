export class ViewWindow {
    private readonly _webview;

    private constructor(WebviewWindow: any, label: string, url: string) {
        const options = { url, decorations: false, resizable: true, alwaysOnTop: true, center: true };
        this._webview = new WebviewWindow(label.replace(" ", "-"), options);
        this._webview.once("tauri://created", function () {
            console.log("Successful creation");
        });

        this._webview.once("tauri://error", function (e: unknown) {
            console.error("Error creating window", e);
        });
    }

    public static async newWindow(label: string, url: string) {
        const WebviewWindow = (await import("@tauri-apps/api/window")).WebviewWindow;
        return new ViewWindow(WebviewWindow, label, url);
    }
}
