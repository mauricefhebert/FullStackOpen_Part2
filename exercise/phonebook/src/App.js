import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (persons.find(x => x.name == newName)) {
      alert(
        `The name ${newName} is already in the application please use another name`
      );
      return;
    }

    const temp = [...persons];
    const x = { name: newName };
    temp.push(x);
    setPersons(temp);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
