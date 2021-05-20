import React, {useContext, useMemo, useCallback, useRef } from 'react';

import computeStyles from '../../utils/computeStyles';

import actions from '../../state/action';

import  GlobalContext from '../../utils/GlobalContext';
import {SceneContext} from '../MotionScene';
import {ScreenContext} from '../MotionScreen';

/*Generates computer style and adds the element to the animation stack */
export default function BaseElement({
    animationKey, children, settings, type,
}){
    const mounted = useRef(false);
    const {sceneName, easing} = useContext(SceneContext);
    const {dispatch, store} = useContext(GlobalContext) || {};
    const {screenName} = useContext(ScreenContext);

    const isRegistered = useMemo(() => (
        store && store.exitView === sceneName
          && store.scenes[sceneName]
          && store.scenes[sceneName].sources[animationKey]
      ), [animationKey, sceneName, store]);

    const attachRef = useCallback((ref)=> {
        if (ref && !mounted.current){
            mounted.current = true;
            if (!animatiionKey){
                console.warn("No animation key was provided for the component, it will be skipped");
                return;
            }
            if(!sceneName){
                console.warn('Skipping the shared element registration, Current motion scene is invalid ');
                return;
            }
            const actionType = isRegistered ? actions.view.registerTarget: actions.view.registerSource;
            const { width, height, x, y} = ref.getBoundingClientRect();

            const component = {
                ref,
                rect: {width, height, x, y},
                styles: computeStyles(type, ref, settings),
                component: children, type, settings,
            };

            dispatch ({
                type: actionType, 
                animationKey,
                component,
                sceneName,
                screenName,
            });
        }
    
    }, [animationKey, sceneName, settings, isRegistered, type, children, dispatch, screenName]);

    return React.cloneElement(children, { ...children.props, ref: attachRef, easing});

}   