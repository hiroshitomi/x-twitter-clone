import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { Avatar } from "@nextui-org/react"
import { ComposePostTextArea } from "./compose-post-textarea"
import { ComposePostButton } from "./compose-post-button"

export function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get("content")

        if (content === null) return

        const supabase = createServerActionClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser()
        if (user === null) return
        await supabase.from("posts").insert({ content, user_id: user.id })
        revalidatePath("/")
    }
    return (
        <form action={addPost} className="flex flex-row p-4 border-b border-white/20">
            <Avatar isBordered radius="full" size="md" src={userAvatarUrl} />
            <div className="flex flex-1 flex-col gap-y-4 ml-4">
                <ComposePostTextArea />
                <ComposePostButton />
            </div>
        </form>
    )
}