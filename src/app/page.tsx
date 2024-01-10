import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react"
import { findrole } from "@/serveractions/action";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"

import Forumlist from "@/components/Forumlist";
import { Subscribedforumbutton } from "@/components/Subscribedforumbutton";




export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"




export default async function Home() {
  const session = await getAuthSession();

  const userRole = session?.user?.role;

  return (
    <>
      <h1 className='font-bold text-3xl md:text-4xl'>大廳</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}

        {/* subreddit info */}
        <div className='overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last'>
          <div className='bg-red-200 px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <HomeIcon className='h-4 w-4' />
              看板
            </p>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-6 py-3 pl-3'>
              <p className='text-zinc-500 '>
                歡迎回來
              </p>
              <Subscribedforumbutton />
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>分享這個平台吧!</CardTitle>
                <CardDescription>Share this platform in one click!</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex space-x-2">
                      <Input value="http://example.com/link/to/document" readOnly />
                      {/* <Button className="shrink-0" onClick={() => navigator.clipboard.writeText("https://phoenix-platform.com")}>
                        Copy Link
                      </Button> */}
                    </div>
                    <div className="flex flex-col space-y-1.5 w-full">
                      {/* <Label htmlFor="framework">Framework</Label> */}
                      <Forumlist />
                      {/* <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> */}

                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>


            {userRole === 'admin' && (
              <Link
                className={buttonVariants({
                  className: 'w-full mt-4 mb-6',
                })}
                href={`/r/create`}>
                創建看板
              </Link>
            )}
          </dl>
        </div>
      </div>
    </>
  );
}
