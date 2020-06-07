import React, { useCallback, useReducer } from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from '../../shared/components/FormElements/Button'

const formReducer = (state,action) => {
  switch(action.type){
      case 'INPUT_CHANGE':
          let formIsValid=true
          for(const inputId in state.inputs){
              if(inputId===action.inputId){
                  formIsValid=formIsValid && action.isValid
              }
              else{
                  formIsValid=formIsValid && state.inputs[inputId].isValid
              }
          }
          return {
              ...state,
              inputs:{
                  ...state.inputs,
                  [action.inputId]:{value:action.value,isValid:action.isValid}
              },
              isValid: formIsValid
          };
          default:
              return state
  }
}
function NewPlace() {
    const [formState,dispatch]=useReducer(formReducer,{
        inputs:{
            title:{
                value:'',
                isValid:false
            }
        },
        description:{
            value:'',
            isValid:false
        },
        isValid:false
    })
  const inputHandler = useCallback((id, value, isValid) => {
    console.table(2);
    return 
      dispatch({
          type:'INPUT_CHANGE',
          value:value,
          isValid: isValid,
          inputId : id
      })
  
  }, []); //usecallback avoid infinite rerendering
  
  const placeSubmitHandler = event => {
      event.preventDefault()
      console.log(formState.inputs)
  }
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="please enter a valid title"
      />
      <Input
        id="description"
        element="textarea"
        // type="text "
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="please enter a valid description at least 5 characters"
      />
       <Input
        id="address"
        element="input"
        // type="text "
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="please enter a valid address"
        /> 
      <Button type="submit" disabled={!formState.isValid}>
          Add Place
      </Button>
    </form>
  );
}

export default NewPlace;
