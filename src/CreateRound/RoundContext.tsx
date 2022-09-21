import {
    createContext, useCallback, useContext, useMemo, useState,
} from "react";
import { TableContext } from "../TableView/TableContext";
import {
    ContextType, PointsRoemState, RoundStateType, TurfType, WhoGoesType,
} from "./RoundContextTypes";

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
    const { addRoundToTable } = useContext(TableContext);
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
        addRoundToTable({ ...roundState, points });
    }, [addRoundToTable, roundState]);

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
