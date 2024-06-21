import { LogicalSize, PhysicalSize, WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useMaxSize = (initVal: LogicalSize | PhysicalSize | null | undefined, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: maxSize, stop } = useFunction(initVal, window.setMaxSize);
    
    const windowName = window.label;

    return {
        windowName,
        maxSize,
        stop
    }
};

export default useMaxSize;