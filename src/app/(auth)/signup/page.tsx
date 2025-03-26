import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>アカウント作成</CardTitle>
          <CardDescription>
            新しいアカウントを作成するには、以下のフォームに記入してください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">お名前</Label>
                <Input id="name" placeholder="山田 太郎" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" placeholder="example@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">パスワード（確認）</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">アカウントを作成</Button>
          <p className="text-sm text-gray-500 text-center">
            すでにアカウントをお持ちの方は
            <a href="/signin" className="text-blue-600 hover:underline ml-1">
              サインイン
            </a>
            へ
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
