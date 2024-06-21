import { WebviewWindow } from "@tauri-apps/api/window";
import { TauriEvent } from "@tauri-apps/api/event";
import { ref } from "vue";
import { getWindow } from "../utils";

export const useWindowPosition = (window?: WebviewWindow) => {
    window = getWindow(window);
    
    const x = ref(0);
    const y = ref(0);

    const stop = ref<(() => void) | null>(null);

    window.outerPosition().then((position) => {
        x.value = position.x;
        y.value = position.y;
    }).catch((e) => {
        console.error('init position error', e);
    });

    window.onMoved((event) => {
        x.value = event.payload.x;
        y.value = event.payload.y;
    }).then((unlisten) => {
        stop.value = unlisten;
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