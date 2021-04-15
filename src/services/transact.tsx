import { Action, Context, } from './types'
// {description:string,amount:number,id:string}[]
const transact =(state:Context,action:Action)=>{
     const newState = {...state,entries:[...state.entries]}   
     // const key = newState.list[newState.list.length-1]?.key??0

     switch (action.type) {
          case 'submit':
               // newState.list.push({trans:action.newName, [action.tran]:(parseInt(action.newAmt)||0), key:key+1, editMode:false});
               // newState[action.tran] += parseInt(action.newAmt)||0
               // action.entry.id = action.id;
               // action.setId((state)=>{
               //      console.log('state = ',state);
               //      return 100
               // });
               // console.log('inside reducer before', action.entry)
               newState.entries.push(action.entry);
               newState[action.entry.type] += action.entry.amount;
               console.log('inside reducer func', newState)
               return newState
               
          // case "delete":    
               // const tran = "income" in newState.list[action.index]? "income":"expense"
               // newState[tran] -= newState.list[action.index][tran]
               // newState.list.splice(action.index,1)
               // return newState 

          case "edit":
               // const amount = newState.list[action.index][action.tran]
               // newState.list[action.index][action.tran]= (action.evt.target.value);
               // if(!(action.tran == "trans")) { 
               // newState[action.tran]+= (((newState.list[action.index][action.tran])) - amount);
               // }
               const entryRef = newState.entries.filter((entry)=>entry.id===action.id)[0];
               // if(entryRef.type==='income'){
                    console.log('this is entryRef = ',entryRef);
                    newState[entryRef.type] -= entryRef.amount;
                    newState[action.kind] += action.amount;
                    entryRef.amount = action.amount;
                    entryRef.type = action.kind;
                    if(action.description!=='') entryRef.description = action.description
                    // entryRef.description = action.description||entryRef.description;
               // }else{
                    // newState.expense-=entryRef.amount
               // }
               // entryRef.description = action.description;
               // entryRef.amount = action.amount;
               return newState 

          // case "change":
               // const changeAmount = (newState.list[action.index][action.changeFrom]-0)
               // newState[action.changeTo] += changeAmount
               // newState[action.changeFrom] -= changeAmount 
               // newState.list[action.index][action.changeTo] = changeAmount
               // delete newState.list[action.index][action.changeFrom]
               // return newState

          // case "modeChange":
               // newState.list[action.index].editMode=!newState.list[action.index].editMode
               // return newState
          default:
               return newState
     }
}

export default transact;