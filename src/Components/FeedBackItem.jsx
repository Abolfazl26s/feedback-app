import { useState } from 'react';

function FeedBackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is ab example of a feedback item');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-diplay">{text}</div>
    </div>
  );
}

export default FeedBackItem;
