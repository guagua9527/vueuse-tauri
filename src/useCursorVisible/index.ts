import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useCursorVisible = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: cursorVisible, stop } = useFunction(initVal, window.setCursorVisible);
    
    const windowName = window.label;

    return {
        windowName,
        cursorVisible,
        stop
    }
};

export default useCursorVisible;