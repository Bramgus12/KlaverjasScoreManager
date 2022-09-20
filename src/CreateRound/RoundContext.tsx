import {
    createContext, useCallback, useMemo, useState,
} from "react";

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
};

type ContextType = {
    roundState: RoundStateType;
    setRoundState: React.Dispatch<React.SetStateAction<RoundStateType>>;
    addRoem: (roem: PointsRoemState) => void;
    addWhoGoes: (whoGoes: WhoGoesType) => void;
    addTurf: (turf: TurfType) => void;
    addPoints: (points: PointsRoemState) => void;
};

export const RoundContext = createContext<ContextType>({
    roundState: null,
    setRoundState: null,
    addRoem: null,
    addWhoGoes: null,
    addTurf: null,
    addPoints: null,
});

function RoundProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    const [roundState, setRoundState] = useState<RoundStateType>({
        whoGoes: null,
        turf: null,
        roem: {
            we: 0,
            them: 0,
        },
        points: {
            we: 0,
            them: 0,
        },
    });

    const addRoem = useCallback((roem: PointsRoemState) => {
        setRoundState((prev) => ({ ...prev, roem }));
    }, []);

    const addWhoGoes = useCallback((whoGoes: WhoGoesType) => {
        setRoundState((prev) => ({ ...prev, whoGoes }));
    }, []);

    const addTurf = useCallback((turf: TurfType) => {
        setRoundState((prev) => ({ ...prev, turf }));
    }, []);

    const addPoints = useCallback((points: PointsRoemState) => {
        setRoundState((prev) => ({ ...prev, points }));
    }, []);

    const providerValue = useMemo(() => ({
        roundState,
        setRoundState,
        addRoem,
        addWhoGoes,
        addTurf,
        addPoints,
    }), [
        roundState,
        setRoundState,
        addRoem,
        addWhoGoes,
        addTurf,
        addPoints,
    ]);

    return (
        <RoundContext.Provider value={providerValue}>
            {children}
        </RoundContext.Provider>
    );
}

export default RoundProvider;
