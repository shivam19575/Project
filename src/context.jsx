
import PropTypes from "prop-types";
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
//  import PropTypes from "prop-types";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image:"",
};

 

const AppProvider = ({ children }) =>{

    const [state,dispatch]= useReducer(reducer,initialState);
            

    const updateHomePage =() =>{
        return dispatch(
            {
              type:"HOME_UPDATE",
              payload:{
                name:"friend brook",
                image:"./images/b.webp",
              },
        });
    };
    
    const updateAboutPage =() =>{
        return dispatch(
            {
              type:"ABOUT_UPDATE",
              payload:{
                name:"shivam pandey",
                image:"./images/c.webp",
              },
        });
    };


    return (
         <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>
    );
};

// AppProvider.propTypes = {
//   // children:PropTypes.object.isRequired
//    children:PropTypes.element.isRequired,
// };


// GLOBAL PROVIDER CUSTOM HOOKS

const UseGlobalContext = () => {
    return useContext(AppContext);
};

//  AppProvider.propTypes={
//      children: PropTypes.node.isRequired,
//  };

export{ AppContext, AppProvider , UseGlobalContext };