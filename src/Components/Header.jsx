function Header({ text }) {
  text = 'FeedBack UI';

  const headerStyle = {
    background: 'rgba(0,0,0,0.3)',
    color: 'tomato',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'FeedBack UI',
};

export default Header;
