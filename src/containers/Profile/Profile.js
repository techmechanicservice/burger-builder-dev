import React, {useRef, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';
import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import '../../recycle/FormInput/form-input.scss';
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';
import Alert from '../../recycle/Alert/Alert';
import useAlert from '../../hooks/useAlert';
import SignupPrompt from '../SignupPrompt/SignupPrompt';
import {useFormik} from 'formik';
import * as Yup from 'yup';


const Signup = props => {

  // eslint-disable-next-line
  const {contactNumber,country,name,userId,zipCode,id} = useSelector(state => state.login.userData)

  const editing = useSelector(state => state.updateProfile.editing);
  const loading = useSelector(state => state.updateProfile.loading);
  const errorMessage = useSelector(state => state.updateProfile.errorMessage);
  const idToken = useSelector(state => state.login.idToken);

  const {history} = props;
  const dispatch = useDispatch();
  const [alertShown,showAlert] = useAlert(false);
  
  useEffect(() => {
    return (() => {
      dispatch(actions.endEdit())
    })
  // eslint-disable-next-line
  },[])
  
  const endType = useSelector(state => state.signup.endType);

  
  const inputRef = useRef();

  const startEdit = () => {
    dispatch(actions.startEdit())
    inputRef.current.focus()
  }

  const acknowledgeAlert = () => {
    if(( endType === 'userSaved' ) || ( endType === 'userNotSaved') ){
      history.replace('/login');
      showAlert(false);
    } else {
      showAlert(false);
    }
    
  }

  const formik = useFormik ({
    initialValues: {
      name:name,
      country:country,
      zipCode: zipCode,
      contactNumber: contactNumber
    },
    validationSchema: Yup.object ({  
        name: Yup.string()
            .required('is required'),
        country: Yup.string()
            .required('is required'),
        zipCode: Yup.string()
            .required('is required')
            .matches(/^[0-9]+$/,'must be a number')
            .min(4,'must be 4 characters at least')
            .max(4,'should only contain 4 digits'),
        contactNumber: Yup.string()
            .required('is required')
            .matches(/^[0-9]+$/,'must be a number')
    }),
    onSubmit: (userData) => {
      dispatch(actions.updateProfile(userData,id,idToken))
      console.log(userData)
    }
  });
  
  const toolkit = (
    (loading && <p className='form__toolkit'>Saving your information</p>) ||
    (errorMessage && <p className='form__error'>{errorMessage.replace(/_/g,' ') + ' :('}</p>) ||
    null
  )

  const formErrors = Object.keys(formik.errors).length;
  return (
    <>
      <div className={editing?'form':'form form--edit'}>
        
        {toolkit}
        {loading? <Spinner/>
        :<form className='form__form' onSubmit={formik.handleSubmit}>

          <FormInput editing={editing} formik={formik} identity='name' type="text" ref={inputRef}>Name</FormInput>
          <FormInput editing={editing} formik={formik} identity='country' type="text">Country</FormInput>
          <FormInput editing={editing} formik={formik} identity='zipCode' type="text">Zip Code</FormInput>
          <FormInput editing={editing} formik={formik} identity='contactNumber' type="text">Contact Number</FormInput>

          {editing? null:
          <button type="button" className='button--more form__edit' onClick={startEdit}>Edit</button>}

          {!editing? null:
          <button disabled={!formErrors <= 0} type="submit" className="button--success form__submit">Save</button>}
          

        </form>}
      </div>

      {!alertShown? null :
      <Alert closeAlert={acknowledgeAlert} >
        <SignupPrompt endType={endType} acknowledgeAlert={acknowledgeAlert}/>
      </Alert>}
    </>
  );
};

export default Signup;
