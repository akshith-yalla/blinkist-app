import React from 'react';
import AddBook from './add-book';

const AddBookComponent = {
    title:"ORGANISMS/AddBook",
    component: AddBook
}

const Template = (args) => (
    <AddBook {...args} />
)

export const DemoAddBook = Template.bind({});
DemoAddBook.args = {
    btnTitle:'Add Book'
}

export default AddBookComponent;