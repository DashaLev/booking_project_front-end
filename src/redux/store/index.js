import { createStore } from "redux";
import {placesReducer} from '../reducers/places.reducer';


export let store = createStore(placesReducer)