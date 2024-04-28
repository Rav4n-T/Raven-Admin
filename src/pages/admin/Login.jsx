import LoginForm from "@/components/LoginForm";
import { ModeToggle } from "@/components/ModeToggle";

export default () => {
  return (
    <div className="h-screen p-4">
      <div className="relative flex justify-between  h-full w-full rounded-3xl shadow-lg">
        <div className="hidden lg:block bg-muted h-full p-8 flex-1  rounded-l-3xl">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Raven
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold ">渡鸦管理后台</h1>
            <p className="text-gray-400">
              本程序由渡鸦工作室开发,唯一官方客服 @outlook.com
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center p-8 mx-auto w-full h-full ">
          <div className="w-full flex flex-col justify-center items-center mb-4 lg:hidden">
            <h1 className="text-3xl font-bold ">渡鸦管理后台</h1>
            <p className="text-gray-400">
              本程序由渡鸦工作室开发,唯一官方客服 @outlook.com
            </p>
          </div>
          <LoginForm />

          <div className="absolute top-2 right-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
