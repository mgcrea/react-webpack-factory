import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {

  static propTypes = {
    color: PropTypes.string,
    increment: PropTypes.number,
    tempo: PropTypes.number
  };

  static defaultProps = {
    color: 'black',
    increment: 1,
    tempo: 1000
  };

  constructor(props) {
    super(props);
    this.interval = setInterval(() => this.tick(), this.props.tempo);
  }

  state = {
    counter: 0
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  render() {
    const {color, increment} = this.props;
    return (
      <pre style={{color}}>
        Counter ({increment}): {this.state.counter}
      </pre>
    );
  }
}
