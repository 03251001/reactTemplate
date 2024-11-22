import {store} from "@store/Index";

export function getToken() {
    return store.getState().UserSlice.token
}
