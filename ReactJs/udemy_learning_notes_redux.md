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
