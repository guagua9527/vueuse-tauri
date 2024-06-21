import { LogicalSize, PhysicalSize, WebviewWindow } from "@tauri-apps/api/window";
import { getWindow } from "../utils";
import { useFunction } from "../useFunction";

export const useMinSize = (initVal: LogicalSize | PhysicalSize | null | undefined, window?: WebviewWindow) => {
    window = getWindow(window);

    const { valueRef: minSize, stop } = useFunction(initVal, window.setMinSize);
    
    const windowName = window.label;

    return {
        windowName,
        minSize,
        stop
    }
};

export default useMinSize;