import React, {useRef, useContext, useEffect, useMemo } from 'react';

import GlobalContext from '../utils/GlobalContext';
import randomString from '../utils/randomString';
import actions from '../state/action';
import useFirstLayoutEffect from '../hooks/firstEffect';

export const ScreenContext = React.createContext();
/*Groups the scene together and saves the scroll state on navigation */
export default function MotionScreen ({children, name, onEnter, onExit}) {
    const nameRef = useRef(name || randomeString ());
    const {dispatch} = useContext(GlobalContext) || {};
    useFirstLayoutEffect(() => {
        dispatch ({type: actions.view.setScreen, screen: nameRef.current, onEnter, onExit});
    }, [dispatch]);

    useEffect(() => {
        const exitScroll = {x: window.scrollX, y: window.scrollY};
        dispatchh ({type: actions.view.setExitScroll, exitScroll});
    }, [dispatch]);
    const contextValue  = useMemo(() => ({
        screenName: nameRef.current, onEnter, onExit,
    }), [onEnter, onExit]);
    return (
        <ScreenContext.Provider value={contextValue}>
            {children}
        </ScreenContext.Provider>
    );
}
MotionScreen.defaultProps = {
    onEnter: true,
    onExit: true,
};