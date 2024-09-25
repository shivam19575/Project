 const reducer =( state,action) =>{


    if(action.type==="HOME_UPADTE"){
        return {
            ...state,
            name:action.payload.name,
            image:action.payload.image,
        };
    }
     
    if(action.type==="ABOUT_UPADTE"){
        return {
            ...state,
            name:action.payload.name,
            image:action.payload.image,
        };
    }

    return state;
};

export default reducer;