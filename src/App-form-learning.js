import "./App.css";

function isAdult(age) {
  return age>= 18 ? "TAK" : "NIE";
}

function formatting(text) {
  return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

const list = [
  {"firstname": "Adam", "lastname": "Kowalski", "age": "33"},
  {"firstname": "Izabela", "lastname": "Makowska", "age": "25"},
  {"firstname": "Jan", "lastname": "Urbański", "age": "46"}
];

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
            <th>Pełnoletni</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatting(list[0].firstname)}</td>
            <td>{formatting(list[0].lastname)}</td>
            <td>{list[0].age}</td>
            <td>{isAdult(list[0].age)}</td>
          </tr>
          <tr>
            <td>{formatting(list[1].firstname)}</td>
            <td>{formatting(list[1].lastname)}</td>
            <td>{list[1].age}</td>
            <td>{isAdult(list[1].age)}</td>
          </tr>
          <tr>
            <td>{formatting(list[2].firstname)}</td>
            <td>{formatting(list[2].lastname)}</td>
            <td>{list[2].age}</td>
            <td>{isAdult(list[2].age)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
