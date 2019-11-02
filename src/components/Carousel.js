import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 3',
    key: '3'
  }
];

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-inner-1'>
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  )
};

export default Carousel;
