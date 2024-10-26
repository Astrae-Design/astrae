import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      containerStyle={{ zIndex: "214748300544 !important" }}
      toastOptions={{
        position: "bottom-center",
        style: {
          zIndex: "214748300544 !important",
        },
      }}
    />
  );
};

export default ToastProvider;
