"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppProvider";

const useAuthRedirect = () => {
    const { accessToken } = useAppContext();
    const router = useRouter();

    useEffect(() => {
        if (accessToken) {
            router.push("/");
        }
    }, [accessToken, router]);
};

export default useAuthRedirect;