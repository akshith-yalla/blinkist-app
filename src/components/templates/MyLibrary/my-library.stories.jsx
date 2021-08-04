import React from 'react';
import MyLibrary from './my-library';
import book from '../../../assets/images/book.png';
import logo from '../../../assets/images/blinkist_logo.png';

const MyLibraryComponent = {
    title: "TEMPLATES/MyLibrary",
    component: MyLibrary
};

const Template = (args) => (
    <MyLibrary {...args} />
);

export const DemoMyLibraryTemp = Template.bind({});
DemoMyLibraryTemp.args = {
    logo : logo,
    logoAlt : "App Logo",
    title1 : "Explore",
    title2 : "My Library",
    title3 : "Add Book",
    title4 : "Account",
    name: 'StephenFrost, Raafi-Karim ...', 
    time: '15-min',
    reads: '17.1k',
    thumbnail: 'Building an Inclusive Organization',
    alt : 'Book Name',
    imgSrc : book
};

export default MyLibraryComponent;
