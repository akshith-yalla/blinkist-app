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
    book:{
        author: 'StephenFrost, Raafi-Karim ...', 
        readTime: '15-min',
        readCount: '17.1k',
        name: 'Building an Inclusive Organization',
        imgAlt : 'Book Name',
        imgSrc : "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg"
    },
    btnText: "Currently reading"
};

export default MyLibraryComponent;
