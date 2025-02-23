import { createContext, useState } from "react";

export const PlatformContext = createContext();

export const PlatformProvider = ({ children }) => {
    const [platforms, setPlatforms] = useState({});

    const updatePlatform = (taskId, newPlatform) => {
        setPlatforms((prev) => ({
            ...prev,
            [taskId]: newPlatform
        }));
    };

    return (
        <PlatformContext.Provider value={{ platforms, updatePlatform }}>
            {children}
        </PlatformContext.Provider>
    );
};
