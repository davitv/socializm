import React from 'react';
import { Router, Route } from 'react-router';

import Header from 'components/header.jsx';

import Homepage from 'components/homepage.jsx';


class Page extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <div className='container'>
                    <div className="page-content">
                        <Route path="/" component={Homepage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;