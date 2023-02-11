import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLocaleLowerCase() };
    });
  };

  monsterFilter = (monsters, searchString) =>
    monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange, monsterFilter } = this;
    let filteredMonsters = monsterFilter(monsters, searchString);

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder={"search"}
          className={"search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
