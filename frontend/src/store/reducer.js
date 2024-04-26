// reducer.js

const initialState = {
  selectedTool: null,
  selectedComponent: null,
  isComponentMenuOpen: false,
  components: [], // array per memorizzare i componenti sulla lavagna
  selectedLayout: null, // stato iniziale campo selectedLayout
};

const actionTypes = {
  SET_SELECTED_TOOL: 'SET_SELECTED_TOOL',
  SET_SELECTED_COMPONENT: 'SET_SELECTED_COMPONENT',
  SET_COMPONENT_MENU_OPEN: 'SET_COMPONENT_MENU_OPEN',
  ADD_COMPONENT: 'ADD_COMPONENT',
  SET_SELECTED_LAYOUT: 'SET_SELECTED_LAYOUT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_TOOL:
      return {
        ...state,
        selectedTool: action.payload,
      };
    case actionTypes.SET_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponent: action.payload,
      };
    case actionTypes.SET_COMPONENT_MENU_OPEN:
      return {
        ...state,
        isComponentMenuOpen: action.payload,
      };
    case actionTypes.ADD_COMPONENT: // Aggiungi il caso per l'azione di aggiunta componente
      return {
        ...state,
        components: [...state.components, action.payload], // Aggiungi il nuovo componente all'array esistente
      };
    case actionTypes.SET_SELECTED_LAYOUT:
      return {
        ...state,
        selectedLayout: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, actionTypes, reducer };
