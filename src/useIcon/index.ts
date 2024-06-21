import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useIcon = (initVal: string | Uint8Array, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: icon, stop } = useFunction(initVal, window.setIcon);
    
    const windowName = window.label;

    return {
        windowName,
        icon,
        stop
    }
};

export default useIcon;