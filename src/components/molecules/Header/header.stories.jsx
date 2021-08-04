import React from 'react';
import Header from './header';
import logo from '../../../assets/images/blinkist_logo.png';

const HeaderComponent = {
    title: 'MOLECULES/Header',
    component: Header
};

const Template = (args)=> (
    <Header {...args}/>
);

export const  DemoHeader = Template.bind({});
DemoHeader.args = {
    logo : logo,
    logoAlt : "App Logo",
    title1 : "Explore",
    title2 : "My Library",
    title3 : "Add Book",
    title4 : "Account"

};

export default HeaderComponent;