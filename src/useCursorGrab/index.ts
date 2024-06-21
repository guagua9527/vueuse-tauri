import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useCursorGrab = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: cursorGrab, stop } = useFunction(initVal, window.setCursorGrab);
    
    const windowName = window.label;

    return {
        windowName,
        cursorGrab,
        stop
    }
};