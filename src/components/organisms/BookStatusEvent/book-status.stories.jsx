import React from 'react';
import BookStatusEvent from './book-status';

const BookStatusEventComponent = {
    title : "ORGANISMS/BookStatusEvent",
    component: BookStatusEvent,
    argTypes: { onBookStatusChange: { action: "status changed" } },

};

const Template = (args) => {
    <BookStatusEvent {...args} />;
};

export const DemoData = Template.bind({});
DemoData.args = {
    bookState: 'Continue Reading'
};

export default BookStatusEventComponent;