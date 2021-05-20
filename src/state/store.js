import actions from "./action";

export default class createStore {
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState;
        this.listener = () => {};
    }

    dispatch  = (actions) => {
        this.state = this.reducer(this.state, actions);
        this.listener();
        return actions;
    }
    subscribe = (listener) => {
        this.listener = listener;
    }
}