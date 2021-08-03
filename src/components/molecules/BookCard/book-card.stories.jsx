import React from 'react';
import BookCard from './book-card';

const BookCardComponent = {
    title: 'MOLECULES/BookCard',
    component: BookCard
};

const Template = (args) => (
    <BookCard {...args}></BookCard>
);
export const DemoBookCard =  Template.bind({});
DemoBookCard.args = {
    name: 'StephenFrost, Raafi-Karim', 
    time: '15-min',
    reads: '17.1k',
    thumbnail: 'Building an Inclusive Organization',
    alt : 'Book Name',
    imgSrc : '/src/assets/images/book.png'
};


export default BookCardComponent;