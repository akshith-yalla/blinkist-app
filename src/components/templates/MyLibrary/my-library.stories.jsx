import React from 'react';
import MyLibrary from './my-library';
import Book1 from '../../../assets/images/Book1.png';
import Book2 from '../../../assets/images/Book2.png';
import Book3 from '../../../assets/images/Book3.png';
import Book4 from '../../../assets/images/Book4.png';
import Book5 from '../../../assets/images/Book5.png';
import Book6 from '../../../assets/images/Book6.png';
import Book7 from '../../../assets/images/Book1.png';
import Book8 from '../../../assets/images/Book2.png';
import Book9 from '../../../assets/images/Book3.png';

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
    book1:{
        imgSrc : Book1,
        imgAlt : "Bring Your Human to Work",
        name: "Bring Your Human to Work",
        author: "Erica Keswin", 
        readTime: "13-minute read",
        readCount: "17.1k"
    },
    book2:{
        imgSrc : Book2,
        imgAlt : "Beyond Entrepreneurship 2.0",
        name: "Beyond Entrepreneurship 2.0",
        author: "Jim Collins & Bill Lazier", 
        readTime: "15-minute read",
        readCount: ""
    },
    book3:{
        imgSrc : Book3,
        imgAlt : "Doesn't Hurt to Ask",
        name: "Doesn't Hurt to Ask",
        author: "Trey Gowdy", 
        readTime: "13-minute read",
        readCount: "1.9k"
    },
    book4:{
        imgSrc : Book4,
        imgAlt : "The Fate of Food",
        name: "The Fate of Food",
        author: "Amanda Little", 
        readTime: "12-minute read",
        readCount: ""
    },
    book5:{
        imgSrc : Book5,
        imgAlt : "Lives of the Stoic",
        name: "Lives of the Stoic",
        author: "Ryan Holiday, Stephen Hansel", 
        readTime: "13-minute read",
        readCount: ""
    },
    book6:{
        imgSrc : Book6,
        imgAlt : "Loving Your Business",
        name: "Loving Your Business",
        author: "Debbie King", 
        readTime: "13-minute read",
        readCount: ""
    },
    book7:{
        imgSrc : Book7,
        imgAlt : "Bring Your Human to Work",
        name: "Bring Your Human to Work",
        author: "Erica Keswin", 
        readTime: "15-minute read",
        readCount: "1.1k"
    },
    book8:{
        imgSrc : Book8,
        imgAlt : "Bring Your Human to Work",
        name: "Bring Your Human to Work",
        author: "Erica Keswin", 
        readTime: "13-minute read",
        readCount: "19.1k"
    },
    book9:{
        imgSrc : Book9,
        imgAlt : "Bring Your Human to Work",
        name: "Bring Your Human to Work",
        author: "Erica Keswin", 
        readTime: "12-minute read",
        readCount: "11k"
    },
    btnText: "Currently reading"
};

export default MyLibraryComponent;
