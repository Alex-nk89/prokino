export interface IFact {
    text: string;
    type: 'FACT' | 'BLOOPER';
    spoiler: boolean;
}

export interface IFactResponse {
    total: number;
    items: IFact[];
}