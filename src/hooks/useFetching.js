import {useState} from "react";

export function useFetching(callBack){
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState(null);

    const fetching = async () => {
        try {
           await callBack();
        } catch (err) {
            setError(err);
        } finally {
            setIsLoader(false);
        }
    }
    return [fetching, isLoader, error];
}