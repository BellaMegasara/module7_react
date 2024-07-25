
import React, { useReducer, useEffect } from "react";
//import { useState, useEffect} from React

export function useData(url) {

    const [data, dispatch] = useReducer(getDataReducer, {
        loading: true,
        data: [],
        error: "",
    });

    useEffect(()=> {
        if (url) {
            let ignore = false;
            dispatch({ type: getDataReducerActions.FETCH});
UserContent
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if (!ignore) {
                    setLoading(false);
                    setData(json);
                }
            });
            return () => {
                ignore = true;
            };
        }
    }, [url]);

    return [data, loading];
}