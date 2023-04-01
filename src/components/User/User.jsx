import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const User = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div>
      <UserContext.Provider
        value={{firstname, lastname, setFirstname, setLastname}}
      >
        Twoje imię to {firstname}, a nazwisko to {lastname}
        <UserForm />
      </UserContext.Provider>
    </div>
  );
};

const UserForm = () => {
  const value = useContext(UserContext);
  return (
    <div>
      Imię:
      <input type="text" onChange={(e) => value.setFirstname(e.target.value)} />
      <br />
      Nazwisko:
      <input type="text" onChange={(e) => value.setLastname(e.target.value)} />
    </div>
  );
};

export { User };
