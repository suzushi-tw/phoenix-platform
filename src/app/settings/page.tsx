import UserNameForm from "@/components/UserNameForm";
import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { setrole } from "@/serveractions/action";
import { toast, Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

const page = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect(authOptions.pages?.signIn || "/sign-in");
  }
  const notify = () => toast('Changes saved!');

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="grid items-start gap-4">
        <h1 className="font-bold text-3xl md:text-4xl">Settings</h1>

        <div className="grid gap-10　">
          <UserNameForm
            user={{
              id: session.user.id,
              username: session.user.username || "",
            }}
          />
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full h-[200px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">臉書認證</TabsTrigger>
          <TabsTrigger value="phone_number">電話認證</TabsTrigger>
          <TabsTrigger value="password">Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                請輸入您的臉書帳號！
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={notify}>Save changes</Button>
              <Toaster />
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="phone_number" className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>Phone Number</CardTitle>
              <CardDescription>
                請輸入您的電話號碼！
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Phone Number</Label>
                <Input id="name" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={notify}>Save changes</Button>
              <Toaster />
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="h-full">
          <form action={async (FormData) => {
            // Call the Server Action with the FormData
            const result=await setrole(FormData);
            if (result.status === 'success') {
              toast.success('Role changed successfully');
            } else if (result.status === 'error') {
              toast.error(result.message);
            }
          }}>
            <Card>
              <CardHeader>
                <CardTitle>版主</CardTitle>
                <CardDescription>
                  志工請輸入密碼成為管理員
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Password</Label>
                  <Input type='text'
                    name='password'
                    placeholder='password...'
                    required />
                </div>
                <div className="space-y-1">
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={notify}>Save password</Button>
                <Toaster />
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
