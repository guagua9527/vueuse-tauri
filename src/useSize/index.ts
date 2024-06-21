import { WebviewWindow } from "@tauri-apps/api/window";
import { h, ref } from "vue";
import { getWindow } from "../utils";
import { TauriEvent } from "@tauri-apps/api/event";

export const useWindowSize = (window?: WebviewWindow) => {
    window = getWindow(window);

    const width = ref(0);
    const height = ref(0);
    const stop = ref<(() => void) | null>(null);

    window.outerSize().then((size) => {
        width.value = size.width;
        height.value = size.height;
    }).catch((e) => {
        console.error('init size error', e);
    });

    window.onResized((event) => {
        height.value = event.payload.height;
        width.value = event.payload.width;
    }).then((unlisten) => {
        stop.value = unlisten;
    });

    const windowName = window.label;

    return {
        windowName,
        width,
        height,
        stop
    }
};

export default useWindowSize;