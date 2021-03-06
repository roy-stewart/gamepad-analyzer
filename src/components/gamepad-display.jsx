import { GamepadContext } from "../contexts";
import { useState } from "react";
import { useAllGamepads } from "../hooks";
import { Toolbar } from "./toolbar";
import { Analyzers } from "../constants";
import { Analyzer } from "./analyzers";
import styles from "./gamepad-display.module.css";

export const GamepadDisplay = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState(null);
    const [analyzerType, setAnalyzerType] = useState(Analyzers.BASIC);

    const hasGamepadConnected = gamepads.length > 0;

    if (hasGamepadConnected) {
        return (
            <GamepadContext.Provider
                value={{
                    id: currentGamepadId,
                    selectGamepad: (id) => setCurrentGamepadId(id),
                    selectAnalyzer: (type) => setAnalyzerType(type),
                    analyzerType,
                }}
            >
                <div className={styles.gamepadDisplay}>
                    <Toolbar />
                    {currentGamepadId !== null && <Analyzer />}
                </div>
            </GamepadContext.Provider>
        );
    } else {
        return <span>No gamepads detected</span>;
    }
};
