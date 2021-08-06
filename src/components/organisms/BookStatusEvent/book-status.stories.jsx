import React from 'react';
import BookStatusEvent from './book-status';

const BookStatusEventComponent = {
    title : "ORGANISMS/BookStatusEvent",
    component: BookStatusEvent
};

const Template = (args) => {
    <BookStatusEvent {...args} />;
};

export const DemoData = Template.bind({});
DemoData.args = {
    bookStatus: 'Continue Reading'
};

export default BookStatusEventComponent;