const initialState = {
    name: "",
    email: "",
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user/setName":
            return {
                ...state,
                name: action.payload,
            };
        case "user/setEmail":
            return {
                ...state,
                email: action.payload,
            };
        default:
            return { ...state };
    }
}

function setName(name) {
    return {
        type: "user/setName",
        payload: name,
    };
}

function setEmail(email) {
    return {
        type: "user/setEmail",
        payload: email,
    };
}

export { setName, setEmail };
export default userReducer;
