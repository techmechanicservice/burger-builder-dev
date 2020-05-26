import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';


const withErrorHandler = (WrappedComponent, axios) => {
    return (
        class extends Component{
            constructor(props){
                super(props)
                
                this.state={
                    error:null
                }

                this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this);

            }

            errorConfirmedHandler(){
                this.setState({error: null})
            }
            

            componentDidMount(){
                axios.interceptors.request.use(req => {
                    this.setState({error: null});
                    return req;
                })

                axios.interceptors.response.use(res => res, error => {
                    this.setState({error: error});
                })
            }

            render(){
                return(
                <Wrapper>
                   <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                   >
                       {this.state.error ? this.state.error.message : null}
                   </Modal>
                   <WrappedComponent {...this.props}/>
               </Wrapper>
                )
            }
       

        }
    )
}


export default withErrorHandler;