import React from "react";

export default class TodoForm extends React.Component {
  _onClick() {
      console.log(this);
      this.props.save(this.refs.inputText.getDOMNode().value);
  }

  render() {
      return (
        <div>
            <input ref="inputText" className="keyword" type="text" />
            <button onClick={this._onClick.bind(this)}>Add</button>
        </div>
      );
  }
}
