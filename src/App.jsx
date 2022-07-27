import task1 from "./img/task1.png";
import task3 from "./img/task3.png";
import task4 from "./img/task4.png";
import Form from "./components/Form.jsx";
import SearchBar from "./components/SearchBar.jsx";

function LayoutWrapper({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      <hr />
      <br />
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <LayoutWrapper title="Task 1">
        <img src={task1} alt="task1" />
      </LayoutWrapper>
      <LayoutWrapper title="Task 2">
        <Form />
      </LayoutWrapper>
      <LayoutWrapper title="Task 3">
        <img src={task3} alt="task3" />
      </LayoutWrapper>
      <LayoutWrapper title="Task 4">
        <img src={task4} alt="task4" />
        <h3>
          .json() is an async method (it returns a Promise itself), so you have
          to assign the parsed value(server_echo) in the next .then()
        </h3>
      </LayoutWrapper>
      <LayoutWrapper title="Task 5">
        <SearchBar />
      </LayoutWrapper>
    </div>
  );
}

export default App;
