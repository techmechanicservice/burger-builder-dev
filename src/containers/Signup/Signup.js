import React, {useRef,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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

  const {history} = props;
  const dispatch = useDispatch();
  const [alertShown,showAlert] = useAlert(false);
  const loading = useSelector(state => state.signup.loading);
  const error = useSelector(state => state.signup.error);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  },[])
  



  const goToCheckout = () => {
    history.replace('/login');
    showAlert(false);
  }

  const formik = useFormik ({
    initialValues: {
      email:'',
      password:'',
      name:'',
      country:'',
      zipCode:'',
      contactNumber:'',
    },
    validationSchema: Yup.object ({  
        email: Yup.string()
            .email ('is invalid')
            .required ('is required'),
        password: Yup.string()
            .required ('is required')
            .min (6, 'must be 6 characters at least'),
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

    onSubmit: (signupData) => {
      dispatch(actions.signup(signupData,showAlert))
    }
  });
  
  const toolkit = (
    (loading && <p className='form__toolkit'>Creating your account</p>) ||
    (error && <p className='form__error'>{error.message.replace(/_/g,' ') + ' :('}</p>) ||
    null
  )

  const formErrors = Object.keys(formik.errors).length;
  return (
    <>
      <div className='form'>
        {toolkit}
        {loading? <Spinner/>
        :<form className='form__form' onSubmit={formik.handleSubmit}>
          <FormInput formik={formik} identity='email' type="email" ref={inputRef}>Email</FormInput>
          <FormInput formik={formik} identity='password' type="password">Password</FormInput>
          <FormInput formik={formik} identity='name' type="text">Name</FormInput>
          <FormInput formik={formik} identity='country' type="text">Country</FormInput>
          <FormInput formik={formik} identity='zipCode' type="text">Zip Code</FormInput>
          <FormInput formik={formik} identity='contactNumber' type="text">Contact Number</FormInput>

          <button disabled={!formErrors <= 0} type="submit" className="button--success form__submit">Create</button>
        </form>}
      </div>

      {!alertShown? null :
      <Alert closeAlert={goToCheckout} >
        <SignupPrompt goToCheckout={goToCheckout}/>
      </Alert>}
    </>
  );
};

export default Signup;
