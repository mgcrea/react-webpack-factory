import React, {Component, PropTypes} from 'react';
import ToolboxProgressBar from 'react-toolbox/lib/progress_bar';
import style from './style';

export default class ProgressBar extends Component {

  static propTypes = {
    children: PropTypes.element,
    shouldBeActive: PropTypes.func,
    getProgress: PropTypes.func
  };

  state = {
    isActive: true,
    progress: 0,
    buffer: 10
  };

  componentWillMount() {
    const {shouldBeActive} = this.props;
    this.setState({
      isActive: shouldBeActive(this.props)
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {getProgress} = this.props;
    if (this.state.progress < 100) {
      const progressValue = getProgress(this.props);
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.setState({
          progress: progressValue,
          buffer: 2 * (100 - progressValue) / 3
        });
        if (progressValue === 100) {
          if (this.deactiveTimeout) {
            clearTimeout(this.deactiveTimeout);
          }
          this.deactiveTimeout = setTimeout(() => {
            this.setState({
              isActive: false
            });
          }, 600);
        }
      }, 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.deactiveTimeout);
  }

  render() {
    const {children} = this.props;
    return (
      <section className={style.root}>
        {this.state.isActive ? <ToolboxProgressBar className={style.progressBar} mode="determinate" value={this.state.progress} buffer={this.state.buffer} /> : ''}
        {children}
      </section>
    );
  }
}

export const decorate = opts => ComposedComponent => props => {
  return (
    <ProgressBar {...opts} {...props}>
      <ComposedComponent {...props} />
    </ProgressBar>
  );
};
