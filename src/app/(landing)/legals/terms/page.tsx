import LegalsHero from "@/sections/legals-hero";

const TermsPage = () => {
  return (
    <section>
      <LegalsHero
        title="Terms & Conditions"
        description="Please go through the terms and conditions agreenment below to understand what you can and cannot do with Astrae Design."
      />
      <div className="container flex flex-col gap-8 md:max-w-4xl -mt-12">
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Overview</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            These terms and conditions outline the rules and regulations for the
            use of Astrae Design&apos;s website, located at astrae.design
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Acceptance of Terms
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use astrae.design if you do not agree
            to all of the terms and conditions stated on this page.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Cookies</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            The website uses cookies to help personalize your online experience.
            By accessing astrae.design, you agreed to use the required cookies.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">License</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            Unless otherwise stated, Astrae Design and/or its licensors own the
            intellectual property rights for all material on astrae.design. All
            intellectual property rights are reserved. You may access this from
            astrae.design for your own personal use subjected to restrictions
            set in these terms and conditions.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">You must not:</h2>

          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Republish material from astrae.design
            </li>
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Sell, rent or sub-license material from astrae.design
            </li>
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Reproduce, duplicate or copy material from astrae.design
            </li>
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Redistribute content from astrae.design
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Content Liability
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
