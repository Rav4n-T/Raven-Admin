import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(6, {
    message: "用户名必须至少为 6 个字符",
  }),
  password: z.string().min(6, {
    message: "密码必须至少为 6 个字符",
  }),
});

export default () => {
  const navigate = useNavigate();
  const loginForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleSubmit = (value) => {
    console.log(value);
    navigate("/admin");
  };
  return (
    <>
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSubmit)}
          className="space-y-4 max-w-[480px] w-full"
        >
          <FormField
            control={loginForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input placeholder="请输入用户名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="请输入密码" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            登陆
          </Button>
        </form>
      </Form>
    </>
  );
};
