import React, {useState} from 'react';
import './layout.scss';
import Toolbar from '../Toolbar/Toolbar'; 
import SideDrawer from '../SideDrawer/SideDrawer';
import {useSelector} from 'react-redux';

const Layout = props => {
    const isAuthenticated = useSelector(state => state.authenticate.token !== null)
    const [sideDrawerShown, showSideDrawer] = useState(false)

    const closeSideDrawer = () => {
        showSideDrawer(false)
    }

    const toggleSideDrawer = () => {
        showSideDrawer(!sideDrawerShown)
    }

    return(
        <div className="app">
            <Toolbar 
                drawerToggleClicked={toggleSideDrawer}
                isAuthenticated={isAuthenticated}/>
            <SideDrawer 
                isAuthenticated={isAuthenticated}
                open={sideDrawerShown} 
                closed={closeSideDrawer}/>
            <main className='main'>
                {props.children}
            </main>
        </div>

    )

}



export default Layout;