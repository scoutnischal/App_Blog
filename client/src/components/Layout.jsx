import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import{Toaster} from 'react-hot-toast';

const Layout = ({children,title,description,keywords,author}) => {
    return (
        <div>
            <Helmet >
            <meta charSet='utf-8'/>
            <meta name='description ' content={description}/>
            <meta name='keywords ' content={keywords}/>
            <meta name='author ' content={author}/>
            <title>{title}</title>
            </Helmet>
            <Header />
            <Toaster/>
            <main>{children}</main>
            <Footer />
        </div>
    )
};


Layout.defaultProps={
    title:"Ecommerce app",
    description:"mern stack project",
    keywords:"mern,react,node,mongodb",
    author:"Ecommerce shop"
}

export default Layout