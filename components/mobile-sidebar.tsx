"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";


const MobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className="md:hidden">
                    <span>
                        <Menu className="md:hidden" />
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;