"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
    accessToken: string;
    setAccessToken: (token: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default function AppProvider({ children, initialValue = "" }: { children: ReactNode, initialValue?: string }) {
    const [accessToken, setAccessToken] = useState(initialValue);
    return (
        <AppContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AppContext.Provider>
    );
}