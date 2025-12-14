"use client";

import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { ConversationType } from "@/app/inbox/page";

interface ConversationClientProps {
  token: string;
  userId: string;
  conversation: ConversationType;
}

export default function ConversationClient({
  token,
  userId,
  conversation,
}: ConversationClientProps) {
  if (!token || !userId || !conversation) {
    return (
      <main className="max-w-[1500px] mx-auto px-6 py-12">
        <p>Error: Missing token, user ID, or conversation data.</p>
      </main>
    );
  }

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <ConversationDetail
        token={token}
        userId={userId}
        conversation={conversation}
      />
    </main>
  );
}
