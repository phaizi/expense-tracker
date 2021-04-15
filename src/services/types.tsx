export type Entry = {
    description: string,
    amount: number,
    type: 'income' | 'expense',
    id: number
}

export type Context = {
    entries: Entry[],
    income: number,
    expense: number,
}
export type Action =
    | { type: 'submit', entry: Entry }
    | { type: 'edit', id: number, kind: 'income' | 'expense', description: string, amount: number }
    | { type: 'delete', id: number }