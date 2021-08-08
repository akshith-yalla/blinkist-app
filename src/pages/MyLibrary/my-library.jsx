import React from 'react';
import MyLibraryBookEvent from '../../components/organisms/MyLibraryBookEvent/my-library-book-event';
import Header from '../../components/molecules/Header/header';
import Footer from '../../components/molecules/Footer/footer';
import MyLibrary from '../../components/templates/MyLibrary/my-library';


const MyLibraryPage = () => {
    return(
        <>
            <MyLibrary header={<Header />} mainContent={<MyLibraryBookEvent />} footer={<Footer />} />
        </>
    );

};

export default MyLibraryPage;
