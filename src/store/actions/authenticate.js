import * as actions from './actions';
import axios from '../../axios/auth'

const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}


const authSuccess = (authData) => {
    return {
        type: actions.AUTH_SUCCESS,
        authData: authData
    }
}


const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error
    }
}


//exports
export const auth = (email,password,isSignUp) =>{
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';

        const endPoints = {
            signUp : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
            signIn : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        }
    
        axios.post((isSignUp? endPoints.signUp : endPoints.signIn), authData)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response.data))
            })
            .catch(error => {
                dispatch(authFail(error))
                console.log(error)
            })
    }
}