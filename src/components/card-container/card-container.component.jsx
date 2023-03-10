import { Component } from "react";

import "./card-container.styles.css";

export default class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster {monster.name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
  }
}
