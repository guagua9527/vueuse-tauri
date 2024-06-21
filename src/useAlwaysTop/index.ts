import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useAlwaysTop = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: alwaysTop, stop } = useFunction(initVal, window.setAlwaysOnTop);
    
    const windowName = window.label;

    return {
        windowName,
        alwaysTop,
        stop
    }
};