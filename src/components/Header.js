import React from 'react'
import Logo from '../elements/Logo'
import Menu from '../elements/Menu'

function Header(){

    return(
        <header>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 header-left">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 header-right">
                        <Menu />
                    </div>

                </div>
            </div>
        </header>
    )

}

export default Header