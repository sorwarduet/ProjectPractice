import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
    form: formReducer,

});

