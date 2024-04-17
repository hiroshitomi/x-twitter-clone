import PostCard from "./post-card"

export default function PostsLists({ posts }: { posts: any }) {
    return (
        <>
            {
                posts?.map(({ post }: { post: any }) => {
                    const {
                        id,
                        user,
                        content
                    } = post

                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl,
                    } = user
                    return (<PostCard key={id} userName={userName} userFullName={userFullName} avatarUrl={avatarUrl} content={content} />)
                })
            }
        </>
    )
}