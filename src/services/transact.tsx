import { Action, Context, } from './types'

const transact = (state: Context, action: Action) => {
     const newState = { ...state, entries: [...state.entries] }

     switch (action.type) {
          case 'submit':
               newState.entries.push(action.entry);
               newState[action.entry.type] += action.entry.amount;
               return newState

          case "delete":
               const index = newState.entries.findIndex((entry) => entry.id === action.id);
               const type = newState.entries[index].type;
               newState[type] -= newState.entries[index].amount;
               newState.entries.splice(index, 1);
               return newState

          case "edit":
               const entryRef = newState.entries.filter((entry) => entry.id === action.id)[0];
               newState[entryRef.type] -= entryRef.amount;
               newState[action.kind] += action.amount;
               entryRef.amount = action.amount;
               entryRef.type = action.kind;
               if (action.description !== '') entryRef.description = action.description
               return newState

          default:
               return newState
     }
}

export default transact;