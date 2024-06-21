import { CursorIcon, WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useCursorIcon = (initVal: CursorIcon, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: cursorIcon, stop } = useFunction(initVal, window.setCursorIcon);
    
    const windowName = window.label;

    return {
        windowName,
        cursorIcon,
        stop
    }
};