import React from 'react';
import MyLibrary from './my-library';
import MyLibraryData from '../../organisms/MyLibrary/my-library';
import Header from '../../organisms/Header/header';
import Footer from '../../molecules/Footer/footer';


const MyLibraryComponent = {
    title: "TEMPLATES/MyLibrary",
    component: MyLibrary
};

const Template = (args) => (
    <MyLibrary {...args} />
);

export const DemoMyLibraryTemp = Template.bind({});
DemoMyLibraryTemp.args = {
    header: <Header />,
    mainContent: <MyLibraryData />,
    footer: <Footer />
};

export default MyLibraryComponent;
