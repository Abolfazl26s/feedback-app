import Header from './Components/Header';
import FeedBackItem from './Components/FeedBackItem';

const App = () => {
  return (
    <>
      <Header text />
      <div className="container app">
        <FeedBackItem />
      </div>
    </>
  );
};

export default App;
