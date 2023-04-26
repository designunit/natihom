import { createBreakpoint } from "react-use";

export function useMobile() {
    return createBreakpoint({ mobile: 0, desktop: 768 })() === 'mobile'
} 