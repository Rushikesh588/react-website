import React from 'react';

const Footer = ()=> {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='w-100 bg-light text-center'>
                <p>copyright © {date} Technical Buddy. All rights Reserved | Terms and Condition.</p>
            </footer>
        </>
    )
}

export default Footer;