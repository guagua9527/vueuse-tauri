// import { LogicalPosition, PhysicalPosition, WebviewWindow } from "@tauri-apps/api/window";
// import { getWindow } from "../utils";
// import { useFunction } from "../useFunction";

// export const useCursorPosition = (initVal: LogicalPosition | PhysicalPosition, window?: WebviewWindow) => {
//     window = getWindow(window);

//     const { valueRef: cursorIcon, stop } = useFunction(initVal, window.setCursorPosition);
    
//     const windowName = window.label;

//     return {
//         windowName,
//         cursorIcon,
//         stop
//     }
// };