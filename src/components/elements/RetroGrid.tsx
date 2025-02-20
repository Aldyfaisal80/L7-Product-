"use client";

import Link from "next/link";
import { RetroGrid as RetroGridComponent } from "../ui/retro-grid";


export function RetroGrid() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Link href="/dashboard">
                <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    DASHBOARD
                </span>
            </Link>

            <RetroGridComponent />
        </div>
    );
}
