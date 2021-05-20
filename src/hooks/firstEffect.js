import {useLayoutEffect, useRef} from 'react';

export default function firstEffect(fn,deps){

    const effectOne = useRef(true);
    useLayoutEffect(()=> {
        effectOne.current = false;
        fn();
    }, [fn, ...deps]);
}