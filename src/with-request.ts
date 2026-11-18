import type { Result } from "./app-context"

export async function withRequest<T>(
    fetchFn: () => Promise<T>,
    setterFunction: (state: Result<T>) => void,
) {
    try {
        setterFunction({ type: "pending" })
        const data = await fetchFn()
        setterFunction({ type: "success", data })
    } catch (error) {
        if (error instanceof Error) {
            return setterFunction({ type: "error", message: error.message })
        }

        setterFunction({ type: "error", message: "Unknown error occurred!" })
    }
}
