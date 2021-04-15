
export type Entry = {
    description:string,
    amount:number,
    type:'income'|'expense',
    id:number
} 

export type Context = {
    entries: Entry[],
    income: number,
    expense: number,
}
export type Action =
 | { type: 'submit', entry:Entry }
//  | { type: 'success', results: string }
//  | { type: 'failure', error: string };

