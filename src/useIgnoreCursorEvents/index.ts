import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useIgnoreCursorEvents = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: ignoreCursorEvents, stop } = useFunction(initVal, window.setIgnoreCursorEvents);
    
    const windowName = window.label;

    return {
        windowName,
        ignoreCursorEvents,
        stop
    }
};

export default useIgnoreCursorEvents;