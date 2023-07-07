import {useState} from "react";

export function useFetching(callBack){
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState(null);

    const fetching = () => {
        try {
            callBack();
        } catch (err) {
            setError(err);
        } finally {
            setIsLoader(false);
        }
    }
    return [fetching, isLoader, error];
}