import React from 'react'
import {motion} from "framer-motion";

import Header from '../components/Header'
import Block404 from '../components/404'
import Footer from '../components/Footer'

function Page404(){

    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    return(
        <div className="redirect">
            <motion.div 
                initial={{x:0}}
                animate={{x:'-100%'}}
                exit={{x:0}}
                transition={LoadingTransition}
                className="page-trans">
            </motion.div>
            <Header />
            <Block404 />
            <Footer />
        </div>
    )
    
}

export default Page404