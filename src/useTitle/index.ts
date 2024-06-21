import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useTitle = (initVal: string, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: title, stop } = useFunction(initVal, window.setTitle);
    
    const windowName = window.label;

    return {
        windowName,
        title,
        stop
    }
};

export default useTitle;