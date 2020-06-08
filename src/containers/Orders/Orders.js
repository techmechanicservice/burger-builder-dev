import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios/orders';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../components/Spinner/Spinner';

class Orders extends Component{
  
    componentDidMount(){
        this.props.onFetchOrders()
    }

    render(){
        let orders = <Spinner/>;
        if (!this.props.fetching){
            orders = this.props.orders.map(order => {
                        return (
                            <Order 
                                key={order.id}
                                ingredients={order.ingredients}
                                price={order.price}
                            />
                        )
                    }) 
        }
        return(
          <div>
              {orders}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.fetchOrders.orders,
        loading: state.fetchOrders.fetching
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));