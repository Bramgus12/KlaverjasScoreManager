export type PointsRoemState = {
    we: number;
    them: number;
};

export type WhoGoesType = "we" | "them";

export type TurfType = "Hearts" | "Clubs" | "Spades" | "Diamonds";

export type RoundStateType = {
    whoGoes: WhoGoesType;
    turf: TurfType;
    roem: PointsRoemState;
    points: PointsRoemState;
    roundNumber?: number;
};

export type RoundContextType = {
    roundState: RoundStateType;
    setRoundState: React.Dispatch<React.SetStateAction<RoundStateType>>;
    addRoem: (roem: PointsRoemState) => void;
    addWhoGoes: (whoGoes: WhoGoesType) => void;
    addTurf: (turf: TurfType) => void;
    addWePoints: (points: number) => void;
    addThemPoints: (points: number) => void;
    addPointsToTable: () => void;
};
