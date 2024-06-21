import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useSkipTaskbar = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: skipTaskbar, stop } = useFunction(initVal, window.setSkipTaskbar);
    
    const windowName = window.label;

    return {
        windowName,
        skipTaskbar,
        stop
    }
};

export default useSkipTaskbar;