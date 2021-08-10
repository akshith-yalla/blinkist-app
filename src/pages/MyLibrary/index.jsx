import React from 'react';
import MyLibraryData from '../../components/organisms/MyLibrary';
import Header from '../../components/organisms/Header';
import Footer from '../../components/molecules/Footer';
import MyLibrary from '../../components/templates/MyLibrary';


const MyLibraryPage = () => {
    return(
        <>
            <MyLibrary header={<Header />} mainContent={<MyLibraryData />} footer={<Footer />} />
        </>
    );

};

export default MyLibraryPage;
