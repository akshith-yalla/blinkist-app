import React from 'react';
import MyLibraryData from '../../components/organisms/MyLibrary/my-library';
import Header from '../../components/organisms/Header/header';
import Footer from '../../components/molecules/Footer/footer';
import MyLibrary from '../../components/templates/MyLibrary/my-library';


const MyLibraryPage = () => {
    return(
        <>
            <MyLibrary header={<Header />} mainContent={<MyLibraryData />} footer={<Footer />} />
        </>
    );

};

export default MyLibraryPage;
