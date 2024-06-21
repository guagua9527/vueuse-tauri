import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useFullscreen = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: fullscreen, stop } = useFunction(initVal, window.setFullscreen);
    
    const windowName = window.label;

    return {
        windowName,
        fullscreen,
        stop
    }
};