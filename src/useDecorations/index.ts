import { WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useDecorations = (initVal: boolean, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: decorations, stop } = useFunction(initVal, window.setDecorations);
    
    const windowName = window.label;

    return {
        windowName,
        decorations,
        stop
    }
};

export default useDecorations;