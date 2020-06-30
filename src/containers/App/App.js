import React, {Suspense} from 'react';
import Layout from '../Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Logout from '../Logout/Logout';
// import Login from '../../experimental/Login/Login';
import {Route, Switch,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports'
import Spinner from '../../recycle/Spinner/Spinner'

const Checkout = React.lazy(() => import ('../Checkout/Checkout'))
const Orders = React.lazy(() => import ('../Orders/Orders'))
const Auth = React.lazy(() => import ('../Auth/Auth'))


const App = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authenticate.token)
  dispatch(actions.checkAuth(token))

  const isAuthenticated = token !== null;


  const routes = function (isAuthenticated){
    if(isAuthenticated){
      return (
          <>
            <Suspense fallback={<Spinner/>}><Route path="/checkout" component={Checkout}/></Suspense>
            <Suspense fallback={<Spinner/>}><Route path="/orders" component={Orders}/></Suspense>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to ="/" />
          </>
      )
    } else {
      return (
        <>
          <Suspense fallback={<Spinner/>}><Route path="/login" component={Auth} /></Suspense>
          <Suspense fallback={<Spinner/>}><Route path="/signup" component={Auth} /></Suspense>
          {/* <Route path="/auth" component={Auth} /> */}
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to = "/"/>
        </>
      )
    }
  }

  return(
    <Layout>
      <Switch>
          {routes(isAuthenticated)}
      </Switch>
    </Layout>
  )
}

export default App;
