import { Component } from "react";
import './search-box.styles.css';

export default class SearchBox extends Component {
  render() {
    const { className, placeHolder, onChangeHandler } = this.props;
    return (
      <input
        className={`${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }
}