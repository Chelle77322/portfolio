import React, {useContext, useCallback } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';

import GlobalContext from '../utils/GlobalContext';

import actions from '../state/action';

/*Wraps the ReactRouterDom link into a function that is used to dispatch an animation event */

export default function RouterLink ({ to, replace, className, target, style, children})
{
const {store, dispatch} = useContext(GlobalContext);
const history = useHistory();
const location = useLocation();
const onClick = useCallback((event) => {
    const destination = typeof to === 'function' ? to (location): to;
    if (store.screen && store.onExit){
        event.preventDefault();

    const method = replace ? history.replace: history.push;

/*Searches through the scenes and groups them based on screen name */
const num = Object.keys(store.scenes).reduce((acc, view) => {
    const {screenName} = store.scenes[view];
    acc[screenName] = [...(acc[screenName] || []), view];
}, {});
if (num[store.screen]&& num[store.screen].length === 1 ){
    dispatch ({
        type: actions.view.setExitView,
        sceneName: num[store.screen][0],
    });
}
method(destination);
    }
}, [dispatch, history, location, replace, store.onExit, store.scenes, store.screen, to]);

return (
    <Link to = {to}
    style = {style}
    target = {target}
    replace = {replace}
    onClick = {onClick}
    className = {className}
    >
    {children}
    </Link>
);
}