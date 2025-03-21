import "./App.css";

const App = () => {
  const fname = "Sony";
  const lname = "App";

  return (
    <>
      <div className="home_container">
        <h1 className="heading">Hello! Students</h1>
        <h2 className="subheading">Welcome to React</h2>
        <h3>{fname + " " + lname}</h3>
        <h4>{2 * 2}</h4>
        <ol>
          <li>Sujata</li>
          <li>Adarsh</li>
          <li>Nilesh</li>
          <li>Om</li>
          <li>Aditi</li>
        </ol>
      </div>
      <div>Hello</div>
    </>
  );
};

export default App;
