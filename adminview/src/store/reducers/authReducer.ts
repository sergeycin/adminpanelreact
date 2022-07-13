

interface ListState {
    isOpen: boolean
  }
  export enum UserActionTypes{
    DARK_THEME= 'FIRST_LIST',
   
  
  }
  interface DarkAction {
    type: UserActionTypes.DARK_THEME,
    payload: false
  }

  
  type ThemeAction = DarkAction ;
  
  const isOpen: ListState = {
    isOpen: false,
  
  }

  
 export const authReducer = (state = isOpen,action: ThemeAction ) : ListState => {
   switch (action.type) {
      case  UserActionTypes.DARK_THEME:
  // return {...state, theme: state.isOpen = action.payload}
    
     default:
     return state
  
  
   }
  }

  export const timerActionMinutes = (payload:number) => ({type: UserActionTypes.DARK_THEME, payload})