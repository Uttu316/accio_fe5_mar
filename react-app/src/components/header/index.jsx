const Header = (props) => {
  const { name = "Human" } = props;
  return (
    <div>
      <h1>Hello</h1>
      <h2>Welcome {name}</h2>
    </div>
  );
};

export default Header;
