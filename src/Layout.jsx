import React from 'react';
import { Layout as AntLayout } from 'antd';

const { Header, Footer, Content } = AntLayout;
import Union from '../src/assets/Icons/Union.png';
const Layout = ({ children }) => {
    return (
        <AntLayout style={{ minHeight: '90vh' }}>

            <Content className='bg-[#0F0F0F]' >

                {children}


            </Content>

        </AntLayout>
    );
};

export default Layout;