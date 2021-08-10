import React from 'react';
import MyLibraryData from '../../components/organisms/MyLibrary';
import Header from '../../components/organisms/Header';
import Footer from '../../components/molecules/Footer';
import Explore from '../../components/templates/Explore';


const ExplorePage = () => {
    return(
        <>
            <Explore header={<Header />} mainContent={<MyLibraryData />} footer={<Footer />} />
        </>
    );

};

export default MyLibraryPage;
