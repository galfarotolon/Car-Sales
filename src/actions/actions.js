// Action Suite
// 1. action types
// 2. action creators
// 3. actions (action objects)

export const ADD_FEATURE = "ADD_FEATURE";
// action creators are just functions that "create" (aka return) actions
export const addFeature = (features) => {
    console.log("add feature called");
    return { type: ADD_FEATURE, payload: features };
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";
console.log('remove Feature called')
export const removeFeature = (features) => {
    return { type: REMOVE_FEATURE, payload: features };
};
