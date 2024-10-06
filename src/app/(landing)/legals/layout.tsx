import ChatWidget from "@/components/common/chat-widget";
import CallToAction from "@/sections/cta";

const LegalsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col">
      <ChatWidget />
      {children}
      <CallToAction />
    </div>
  );
};

export default LegalsLayout;
