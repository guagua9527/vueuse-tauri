import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useMinimizable = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: minimizable, stop } = useFunction(initVal, window.setMinimizable);
    
    const windowName = window.label;

    return {
        windowName,
        minimizable,
        stop
    }
};

export default useMinimizable;