import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useClosable = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: closable, stop } = useFunction(initVal, window.setClosable);
    
    const windowName = window.label;

    return {
        windowName,
        closable,
        stop
    }
};