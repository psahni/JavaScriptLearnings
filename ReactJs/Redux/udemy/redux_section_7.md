# 98 Basics fof Redux Thunk

* To make async requests, we use thunk. We create an action that returns some data,
to bring the data, it takes time. A promise has to be resolved. We have to use some plugin for it.

* Action Creator returns action which passes to dispatch(A funnel kind of) which then returns the data
 and passes it to reducers.

 Example:-

 ``
import axios from 'axios';

 export function fetchUsers() {
   const request = axios.get('http://jsonplaceholder.typ.../users')

    return (dispatch) => {
      request.then({data}) => {
        dispatch({type: 'FETCH_PROFILES', payload: data})
      }
     }
 }

 ``

 With the help of redux thunk we are able to return a function like above from an action creator.

 # 99 Redux and firebase
 https://www.quora.com/What-is-firebase

Good to read:
https://www.codementor.io/vijayst/using-firebase-with-redux-for-building-a-react-app-du1086puw

# 100 Dynamic forms Redux forms

Removed the repetitive code in the form. Made it dry.

const FIELDS = {
  title: {
    label: 'title',
    type: 'input'
  }
}

_.keys(FIELDS, () => {})

# 101 skipped

# 102

Talked about routes callback. How we can call a function when we access some route.

'/photos'.

routes/route_callbacks.js

import store from '../store';
import { fetchPhotos } from '../actions';

export function onPhotosEnter() {
  store.dispatch(fetchPhotos());
}

routes/index.js

import { onPhotosEnter } from './route_callbacks';
<Route path="photos" component={Photos} onEnter={onPhotosEnter}>
