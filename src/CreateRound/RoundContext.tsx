import { createContext, useMemo, useState } from "react";

type RoundStateType = {
    whoGoes: "We" | "Them";
    turf: "Hearts" | "Clubs" | "Spades" | "Diamonds";
};

export const RoundContext = createContext<{
    roundState: RoundStateType;
    setRoundState: React.Dispatch<React.SetStateAction<RoundStateType>>;
}>({
    roundState: null,
    setRoundState: null,
});

function RoundProvider(props: { children: React.ReactNode }) {
    const { children } = props;
    const [roundState, setRoundState] = useState<RoundStateType>({
        whoGoes: null,
        turf: null,
    });

    const providerValue = useMemo(() => ({
        roundState,
        setRoundState,
    }), []);

    return (
        <RoundContext.Provider value={providerValue}>
            {children}
        </RoundContext.Provider>
    );
}

export default RoundProvider;
