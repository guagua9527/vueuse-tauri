import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useMaximizable = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: maximizable, stop } = useFunction(initVal, window.setMaximizable);
    
    const windowName = window.label;

    return {
        windowName,
        maximizable,
        stop
    }
};

export default useMaximizable;