"use client";

import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useCustomToast from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

type Props = {
  subredditId: string;
  subredditName: string;
  isSubscribed: boolean;
};

const SubscribeLeaveToggle = ({
  subredditId,
  subredditName,
  isSubscribed,
}: Props) => {
  const { loginToast } = useCustomToast();
  const router = useRouter();

  const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };

      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: "There was an error.",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });

      return toast({
        title: "Subscribed",
        description: `您訂閱了 r/${subredditName}`,
      });
    },
  });
  const { mutate: unsubscribe, isLoading: isUnsubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };

      const { data } = await axios.post("/api/subreddit/unsubscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: "There was an error.",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });

      return toast({
        title: "Unsubscribed",
        description: `您取消追蹤了 r/${subredditName}`,
      });
    },
  });
  return isSubscribed ? (
    <Button
      className="w-full mt-1 mb-4"
      onClick={() => unsubscribe()}
      isLoading={isUnsubLoading}
    >
      退訂看板
    </Button>
  ) : (
    <Button
      className="w-full mt-1 mb-4"
      onClick={() => subscribe()}
      isLoading={isSubLoading}
    >
      追蹤
    </Button>
  );
};

export default SubscribeLeaveToggle;
