import React, { Component } from 'react';

class Guests extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      guests: [{ name: 'React' }, { name: 'VueJS' }]
    };
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      let newName = { name: e.target.value };
      let newNames = this.state.guests.concat(newName);
      this.setState({ guests: newNames });
      // console.info(this.state);
      e.target.value = '';
    }
  }

  handleRemove(i) {
    let newNames = this.state.guests;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
  }

  render() {
    let guests = this.state.guests.map((guest, i) => (
      <li className="list-group-item animated bounceInLeft" key={i}>
        {guest.name}
        <button
          className="float-right"
          onClick={this.handleRemove.bind(this, i)}
        >
          <i className="fa fa-trash text-danger" aria-hidden="true" />
        </button>
      </li>
    ));
    return (
      <div className="container">
        <input
          className="form-control"
          type="text"
          placeholder="Invite Someone"
          value={this.state.newName}
          onKeyDown={this.handleChange.bind(this)}
        />
        <ul className="guest-list list-group  mt-3">{guests}</ul>
      </div>
    );
  }
}

export default Guests;
