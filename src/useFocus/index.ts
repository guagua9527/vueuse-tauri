import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useFocus = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: focus, stop } = useFunction(initVal, window.setFocus);
    
    const windowName = window.label;

    return {
        windowName,
        focus,
        stop
    }
};

export default useFocus;