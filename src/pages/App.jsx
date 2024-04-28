import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/Auth";
import { toast } from "sonner";

const App = () => {
  const token = useAuthStore.use.token();
  const expiresIn = useAuthStore.use.expiresIn();
  const updateAuth = useAuthStore.use.updateAuth();

  const handleClick = (value) => {
    updateAuth({ expiresIn: expiresIn + value });
  };
  const handleToast = () => {
    updateAuth({ token: expiresIn + 1 });
    toast.success("test", { description: "fuck U" + expiresIn });
  };

  return (
    <>
      <ModeToggle />
      <Button className="bg-primary" onClick={() => handleClick(1)}>
        Click me {token}
      </Button>
      <Button className="bg-primary" onClick={() => handleClick(-1)}>
        Click me {expiresIn}
      </Button>
      <Button className="bg-primary" onClick={() => handleToast()}>
        Click me {expiresIn}
      </Button>
    </>
  );
};

export default App;
