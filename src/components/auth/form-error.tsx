import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className=" w-full bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-4 mt-2">
      <AlertTriangle className="h-4 w-4 md:h-5 md:w-5" />
      <p>{message}</p>
    </div>
  );
};
