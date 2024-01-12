"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure(
            "47c366b7-f642-4d8f-b97c-80d2d54fdc3e"
        );
    }, []);

    return null;
}