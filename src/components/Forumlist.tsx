import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

// import Link from "next/link";
// import { Icons } from "./Icons";
// import UserAuthForm from "./UserAuthForm";
// import Image from 'next/image';

const Forumlist = () => {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4 mt-6">
          <h4 className="text-sm font-medium">大廳</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <Link href={"/r/Home"}>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>Ex</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    論壇
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
              </Link>
              
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">友善企業</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>Ex</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    職場性別衛教
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" />
                  <AvatarFallback>EX</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    友善企業認證
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-between space-x-4">
            </div>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">專業諮詢</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>Ex</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    預約心理師
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" />
                  <AvatarFallback>EX</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    預約志工
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" />
                  <AvatarFallback>EX</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    預約法律諮詢
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">求職媒合</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>Ex</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    友善企業徵才
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Forumlist;