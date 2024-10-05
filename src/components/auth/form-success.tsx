import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm md:text-base text-emerald-500 mb-4 mt-2">
      <CircleCheck className="h-4 w-4 md:h-5 md:w-5" />
      <p>{message}</p>
    </div>
  );
};
