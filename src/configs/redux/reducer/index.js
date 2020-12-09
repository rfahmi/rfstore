import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import suggestionReducer from './suggestionReducer';
import searchReducer from './searchReducer';
import selectedReducer from './selectedReducer';

const reducer = combineReducers({
  cart: cartReducer,
  suggestion: suggestionReducer,
  search: searchReducer,
  selected: selectedReducer,
});

export default reducer;
