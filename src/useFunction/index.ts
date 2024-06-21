import { ref, watch, Ref } from "vue";
export type FunctionType<T> = (val: T) => Promise<void> | void;

export const useFunction = <T>(initVal: T, func: FunctionType<T>) => {
    const valueRef = ref(initVal) as Ref<T>;

    const stop = watch(valueRef, (val) => {
        func(val);
    }, {immediate: true});

    return {
        valueRef,
        stop
    }
}