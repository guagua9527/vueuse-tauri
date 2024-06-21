import { appWindow, WebviewWindow } from "@tauri-apps/api/window";

// 当没有传入指定窗口时，默认使用当前窗口
export const getWindow = (window?: WebviewWindow) => {
    return window || appWindow;
}

export default {
    getWindow
}