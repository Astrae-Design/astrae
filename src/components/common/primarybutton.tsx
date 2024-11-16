const PrimaryButton = (props: React.PropsWithChildren) => {
  return (
    <button className="relative  w-full h-10 inline-flex items-center justify-center px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-sm bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]">
      <div className=" absolute inset-0">
        <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
      </div>
      <span className=" inline-flex items-center">{props.children}</span>
    </button>
  );
};

export default PrimaryButton;
