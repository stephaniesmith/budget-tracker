import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const defaultState = {
  description: '',
  amount: 0
};

export default class BudgetForm extends Component {
  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.placeholder]: target.value });
  };

  render() {
    const { date, description, amount } = this.state;


    return (
      <form>
        <input placeholder="description" value={description} onChange={this.handleChange}/>
        <input placeholder="amount" value={amount} onChange={this.handleChange}/>
        <input placeholder="date" value={date} onChange={this.handleChange}/>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}