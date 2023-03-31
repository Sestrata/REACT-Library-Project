import { useState } from "react";

export const useLocalStorage = (key, initalValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState;
        }
        return initalValue;
    });

    const setLocalStorageState = (value) => {
        setState(value); //if func=>ex to result
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setLocalStorageState];
};
