"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TanstackProvider } from "./TanstackProvider"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}><TanstackProvider>{children}</TanstackProvider></NextThemesProvider>
}
