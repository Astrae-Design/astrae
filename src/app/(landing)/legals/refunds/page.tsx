import LegalsHero from "@/sections/legals-hero";

const RefundsPage = () => {
  return (
    <section>
      <LegalsHero
        title="Refunds Policy"
        description="Our policy regarding refunds for Astrae Design templates"
      />
      <div className="container flex flex-col gap-8 md:max-w-4xl -mt-12">
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            No Refunds Policy
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            Due to the nature of our digital products, we do not offer refunds
            for Astrae Design template purchases.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Support and Assistance
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            If you&apos;re facing any problems with our products or have any
            questions, we&apos;re here to help. Please don&apos;t hesitate to
            reach out to us through one of the following channels:
          </p>
          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Email:{" "}
              <span className=" text-[#0096FA]">support@astrae.design</span>
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Chatwoot Chat: Available in the bottom right corner of our website
            </li>
          </ul>
          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            Our support team is committed to assisting you and ensuring you have
            the best possible experience with Astrae Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundsPage;
