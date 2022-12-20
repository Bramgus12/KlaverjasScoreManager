import { Moment } from "moment";

export type HomeStateType = {
    isLoading: boolean;
    tables: Array<{
        date: Moment;
        totalWe: number;
        totalThem: number;
    }>;
};
