import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import PostsLists from "./components/posts-list";
import { ComposePost } from "./components/compose-post";
import Profile from "./components/profile";
import { IconBrandX } from "@tabler/icons-react";
import NavBar from "./components/navbar";
import InputSearch from "./components/input-search";
import CardSubscription from "./components/premium-subscription";
import WhatHappenedCard from "./components/what-happened-card";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(name, user_name, avatar_url)")
    .order("created_at", { ascending: false })

  return (
    <main className="flex min-h-screen justify-between">
      <section className="max-w-[317px] w-full mx-auto min-h-screen px-6 py-6">
        <IconBrandX />
        <NavBar />
        <Profile userAvatarUrl={session.user?.user_metadata?.avatar_url} userName={session.user?.user_metadata?.user_name} />
      </section>
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostsLists posts={posts} />
      </section>
      <section className="max-w-[350px] w-full mx-auto min-h-screen py-6">
        <InputSearch />
        <CardSubscription />
        <WhatHappenedCard />
      </section>
    </main>
  );
}
