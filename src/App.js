import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState('Mings Monsters');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) =>
    setMonsters(users)
  );
}, []);

  const onSearchChange = (event) => {
    setSearchString(event.target.value.toLocaleLowerCase());
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value.toLocaleLowerCase());
  };

  const monsterFilter = (monsters, searchString) =>
    monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );

  let filteredMonsters = monsterFilter(monsters, searchString);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder={"search"}
        className={"search-box"}
      />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeHolder={"title"}
        className={"search-box"}
      />
      <CardList monsters={filteredMonsters} />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchString: event.target.value.toLocaleLowerCase() };
//     });
//   };

//   monsterFilter = (monsters, searchString) =>
//     monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(searchString)
//     );

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange, monsterFilter } = this;
//     let filteredMonsters = monsterFilter(monsters, searchString);

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Inc Database</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeHolder={"search"}
//           className={"search-box"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
