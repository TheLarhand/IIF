import { useMemo } from "react"

export const UsePaginaion = (totalPages) => {
    const result = useMemo(() => {
        let resultCopy = []
        for (let i = 0; i < totalPages; i++) {
            resultCopy.push(i + 1)            
        }
        return resultCopy
    }, [totalPages])
    return result
}