'use client'
import { useFormStatus } from "react-dom";

export function ComposePostButton() {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            type="submit"
            className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end disabled:opacity-40 disabled:pointer-events-none"
        >
            {pending ? "Posteando..." : "Postear"}
        </button>
    )
}