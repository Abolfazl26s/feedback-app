import Header from './Components/Header';
import FeedBackItem from './Components/FeedBackItem';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, vel perspiciatis nihil laudantium sit quo ad culpa facilis, itaque autem quod consequuntur optio vero velit officiis. Adipisci corrupti suscipit expedita.',
    },
    {
      id: 2,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, vel perspiciatis nihil laudantium sit quo ad culpa facilis, itaque autem quod consequuntur optio vero velit officiis. Adipisci corrupti suscipit expedita.',
    },
    {
      id: 3,
      rating: 7,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, vel perspiciatis nihil laudantium sit quo ad culpa facilis, itaque autem quod consequuntur optio vero velit officiis. Adipisci corrupti suscipit expedita.',
    },
    {
      id: 4,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, vel perspiciatis nihil laudantium sit quo ad culpa facilis, itaque autem quod consequuntur optio vero velit officiis. Adipisci corrupti suscipit expedita.',
    },
  ]);

  return (
    <>
      <Header text />
      <div className="container app">
        <FeedBackItem item={feedback} />
      </div>
    </>
  );
};

export default App;
