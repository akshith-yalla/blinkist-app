import React from 'react';
import MyLibraryBookEvent from './my-library-book-event';

const MyLibraryBookEventComponent = {
    title : "ORGANISMS/BookStatusEvent",
    component: MyLibraryBookEvent
};

const Template = (args) => {
    <MyLibraryBookEvent {...args} />;
};

export const DemoData = Template.bind({});
DemoData.args = {
    bookStatus: 'Continue Reading'
};

export default MyLibraryBookEventComponent;