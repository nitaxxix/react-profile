import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

interface Student {
  id: number;
  name: string;
}

function Profiles() {
  const students: Student[] = [
    { id: 1, name: "John" },
    { id: 2, name: "nita" },
    { id: 3, name: "andrew" },
    { id: 4, name: "phak" },
  ];
  return (
    <ul>
      {students.map((student) => {
        return (
          <Profile
            key={student.id}
            student={student}
            onProfileClick={console.log}
          />
        );
      })}
    </ul>
  );
}

type ProfileProps = {
  student: Student;
  onProfileClick: (student: Student) => void;
};

function Profile({ student, onProfileClick }: ProfileProps) {
  return (
    <li
      onClick={() => {
        onProfileClick(student);
      }}
    >
      name: [{student.id}] {student.name}
    </li>
  );
}

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <p onClick={() => setCounter(counter + 1)}>
        Increase counter : {counter}
      </p>
    </>
  );
}

function App() {
  const name = "nita";
  const age = "22";
  const isLoading = true;

  return (
    <>
      <Counter></Counter>
      <h1>Hello {name}</h1>
      <h1>You are {age} years old.</h1>
      {isLoading ? <p>Loading ...</p> : <p>Loaded</p>}
      <br />
      <Profiles />
      {/* <Profiles></Profiles>
      {Profiles()} */}
    </>
  );
}

export default App;
