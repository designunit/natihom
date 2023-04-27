import { useMedia } from 'react-use'

export function useMobile() {
    return useMedia('(max-width: 480px)')
} 