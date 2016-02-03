/* eslint-disable */

const log = {warn: ::console.warn};
import React, {Component} from 'react';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

      // const responseStream = Observable.create(observer => {
      //   console.warn('observer', observer, observer.prototype);
      //   window.fetch(requestUrl)
      //     .then(response => response.json())
      //     .then(observer._next)
      //     .catch(observer._error)
      //     .then(() => {
      //       observer.complete();
      //       console.warn('end');
      //     });
      // });


//  Rx.Observable.fromEvent(refreshButton, 'click');
function subjectFactory() {

  function subject(value) {
    // if (typeof mapFunction === 'function') {
    //   value = mapFunction.apply(undefined, arguments);
    // } else if (typeof mapFunction !== 'undefined') {
    //   value = mapFunction;
    // }
    subject.next(value);
    return value;
  }

  for (var key in Subject.prototype) {
    subject[key] = Subject.prototype[key];
  }
  // Object.assign(subject, Subject.prototype);

  Subject.apply(subject, []);

  return subject;
}

export default class FollowBox extends Component {
  componentDidMount() {
    console.warn('this', this);
    const responseStream = this.refreshClickStream
    .map((ev) => {
      log.warn('ev', ev);
      return ev;
    })
    .map((ev) => {
      console.warn('new stream', ev, ev.target);
      var randomOffset = Math.floor(Math.random()*500);
      return 'https://api.github.com/users?since=' + randomOffset;
    })
    .startWith('https://api.github.com/users')
    .flatMap(requestUrl =>
      Observable.fromPromise(window.fetch(requestUrl)
      .then(response => response.json()))
    )
    .map(function(userList) {
      return userList[Math.floor(Math.random()*userList.length)];
    });
    responseStream.subscribe(::console.log);
    // this.refreshClickStream.subscribe(::console.log);

// var suggestion1Stream = responseStream
//   .map(function(listUsers) {
//     // get one random user from the list
//     return listUsers[Math.floor(Math.random()*listUsers.length)];
//   });

    // const requestStream = Observable.of('https://api.github.com/users');
    // const responseStream = requestStream
    //   .flatMap(requestUrl => Observable.fromPromise(window.fetch(requestUrl).then(response => response.json())));
    // responseStream.subscribe(res => {
    //   log.warn('res', res);
    // });

    // var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');
  }

  refreshClickStream = subjectFactory();

  handleClick(ev) {
    log.warn('handleClick', ev.target);
  }

  render() {
    // const { todos, actions } = this.props
    return (
      <section>
        <h2>Who to follow?</h2>•<a className="btn btn-primary" onClick={this.refreshClickStream}>Refresh</a>•<a>View all</a>
        FollowBox
      </section>
    );
  }
}
