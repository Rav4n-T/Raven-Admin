import { Outlet } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import AdminUserNav from "./AdminUserNav";

const AdminLayout = () => {
  return (
    <div className="p-2 min-h-screen flex">
      <div className="flex flex-1 flex-col rounded-lg border-gray-600 border-1 shadow-2xl w-full">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              <AdminUserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
