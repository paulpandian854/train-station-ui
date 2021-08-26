import { createStore } from "redux";
import rotateReducer from "./rotateReducer";

function configureStore(state = { rotating: '' }) {
  return createStore(rotateReducer,state);
}

export default configureStore;