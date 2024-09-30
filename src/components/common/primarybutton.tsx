const PrimaryButton = (props: React.PropsWithChildren) => {
  return (
    <button className="relative h-10 px-3 rounded-lg font-medium text-white text-sm bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]">
      <div className=" absolute inset-0">
        <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default PrimaryButton;
