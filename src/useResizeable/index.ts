import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useResizeable = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: resizeable, stop } = useFunction(initVal, window.setResizable);
    
    const windowName = window.label;

    return {
        windowName,
        resizeable,
        stop
    }
};

export default useResizeable;