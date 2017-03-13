# Redux
#- It has good documentation.

# What are the advantages:-
#-

#- Data and view come together to form a workable form of the application.

#- Redux is state container, collection of data/meta data that describes the app. React represents view.
#- React displayes the data, on which user interacts.
#- Central single object which is called state.
#- Application level state. All the data of the application.
#- Display current count example.


# How to model/design your state is vital.
# Chapter 37 on state and data (Watch again if needed).


#- Boiler plate code  - React simple starter the default project

# Reducers ( 39 )
Defn:- Its a function that returns a piece of application state(value of the state). Many states. Many reducers.

#- User, current_user => UserReducer, currentUserReducer

#- application state is a plain js object.

redurces/index.js

import { combineReducers } from 'redux';
import BookReducer from './reducer_books';

const rootReducer = combineReducer({
    books: BooksReducer
});

export default rootReducer;

#- container - React component that connects with Redux.

#- ReactRedux

# 40 book-list component.

export default class BookList extends Component {
    renderList() {
      return this.props.books.map((book) => {
          return (
            <li key={book.title} className="list-group-item">{book.title}</li>
          );
      });
    }

    render() {
      return(
        <ul className="list-group">
          {this.renderList()}
        </ul>
      )
    }
}

#- React for views, Redux for state.

#- Containers vs Components
Container is a component that has direct access to state produced by Redux.
They are the links between react and redux.

# 41 Implementation of container containers/book_list.js

import React, { Component } from 'react';
import { connect } from 'react-redux';



function mapStateToProps(state) {
  // will be show up as props inside BookList

  return {
    asdf: '123'
  }
}

then inside render function of BookList, console.log(this.props.asdf)

mapStateToProps:-
..
return {
  books: state.books
}
..

export default connect(mapStateToProps)(BookList);

#- mapStateToProps function is a glue.

# Containers and Reducers Review

reducers/reducer_books.js

export default function() {
  return [
    { title: 'Book1'},
    { title: 'Book2'},
    { title: 'Book3'}
  ]
}
#- Reducers generate the application state. A state is just an object. Redux generate state object that is mapped to props of the
component through mapStateToProps.

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;

# Actions and Actions Creaters.

#- When an event triggers, it calls action creator which returns an action(object) and that action is automatically sent to all reducers.
Reducers process and return the new state which is passed to containers.

# Binding To Action Creator
#- actions/index.js
export function selectBook(book) {
  console.log('A book has been selected:', book.title)
}

#- containers/book_list.js
import { bindActionCreators } from 'redux';

..

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

..

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

#- Read ReactRedux documentation.

# Continue from 46

#- We have to connect action creator to the container.

# click event on 'li'  onClick => (() => this.props.selectBook(book))

#- actions/index.js

export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action, an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

#- book-list.js

function mapDispatchToProps(dispatch) {
  //Whenever select book, is called, the result should be passed to all our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

# 47 reducers/reducer_active_book.js

export default function(state = null, action) {
  switch(action.type) {
    case  'BOOK_SELECTED';
      return action.payload; // selected book
  }
  return state;
}

# 48

#- Whenever a book is selected, detail view is rendered.

#- containers/book-detail.js ( containers touch redux directly )

import React, { Component } from  'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
  render() {
    return {
      <h3>Details</h3>
      <div>{this.props.book.title}</div>
    };
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);

#- In app.js
import BookDetail from '../containers/book-detail';
export default class App extends Component {
  render() {
    ..
    <BookDetail />
    ..
  }
}

# 49
#- On bootstrap of the app or the startup of the application, the application state is not present. Its null.

#- containers/book-detail.js
render() {
  ..
  if(!this.props.book) {
    return 'select a book to get started'
  }
  ..
  return (
    <div>{this.props.title}</div>
    <div>{this.props.pages}</div>
  );
}

#- reducers/reducer_book.js

export default function() {
  return [
    { title: 'Javascript the...', pages: 40},
    { title: 'Javascript the...'},
    { title: 'Javascript the...'}
  ];
}

# 50
An app state is completely diff/separate than component state.

#- combineReducers combine the reducers. Pass the key and the reducer.
#- Reducers manipulate/return the application state and they do it through actions.
#- Action creators are objects.
#- actions/index.js

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with type property.

  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}


#- redurces/index.js

import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducer({
  books: BooksReducer,
  activeBook: ActiveBook
});


export default rootReducer;
