import { WebviewWindow } from "@tauri-apps/api/window";
import { TauriEvent } from "@tauri-apps/api/event";
import { ref } from "vue";
import { getWindow } from "../utils";

export const useWindowPosition = (window?: WebviewWindow) => {
    window = getWindow(window);
    
    const x = ref(0);
    const y = ref(0);

    window.outerPosition().then((position) => {
        x.value = position.x;
        y.value = position.y;
    }).catch((e) => {
        console.error('init position error', e);
    });

    const stop = window.listen(TauriEvent.WINDOW_MOVED, (event) => {
        const payload = event.payload as { x: number, y: number };
        x.value = payload.x;
        y.value = payload.y;
    });

    const windowName = window.label;

    return {
        windowName,
        x,
        y,
        stop
    }
}

export default useWindowPosition;