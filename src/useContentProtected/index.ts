import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useContentProtected = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: contentProtected, stop } = useFunction(initVal, window.setContentProtected);
    
    const windowName = window.label;

    return {
        windowName,
        contentProtected,
        stop
    }
};