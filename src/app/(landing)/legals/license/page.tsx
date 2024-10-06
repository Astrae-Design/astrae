"use client";

import LegalsHero from "@/sections/legals-hero";

const LicensingPage = () => {
  return (
    <section>
      <LegalsHero
        title="Licensing"
        description="Please go through the licensing agreenment below to understand what you can and cannot do with Astrae Design templates"
      />
      <div className="container flex flex-col gap-8 md:max-w-4xl -mt-12">
        {" "}
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Overview</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            This agreement outlines the permissions granted by our Astrae
            License for each item available for purchase or download on
            astrae.design. If purchasing for multiple team members, please
            support the creators by selecting the appropriate team size license
            during checkout.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">License Grant</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            The Astrae License provides you with an ongoing, non-exclusive,
            worldwide license to use the digital work (“Item”).
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Permitted Uses</h2>

          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Create End Products: You can create unlimited end products for
              yourself or your clients.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Distribution: End products may be sold, licensed, sub-licensed, or
              freely distributed.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Modification: You may modify, manipulate, and combine the Item
              with other works to create derivative works. These resulting works
              are subject to this license.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Multi-use: This license allows you to use an Item multiple times
              in various projects.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Prohibited Uses</h2>

          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Re-distribution: You cannot re-distribute the Item as a stock
              image or its source files, regardless of modifications.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Marketplace Restrictions: You cannot sell, resell, or distribute
              the Item or derivative works on any marketplace, including
              astrae.design and other platforms.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Template Creation: You cannot create themes, templates, or
              derivative products to sell on any marketplace.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Enforcement</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            Violation of these terms will be pursued to the fullest extent of
            the law.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Sample End Products
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            End products include, but are not limited to:
          </p>

          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Commercial or personal websites
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Web apps
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Games
            </li>
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Presentations
            </li>
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Wireframes
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Additional Terms</h2>

          <ul className="list-disc space-y-2">
            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Third-Party Components: Some Items may contain components sourced
              from elsewhere with different license terms, such as open source
              or Creative Commons licenses. These components will be identified
              in the Item&apos;s description or downloaded files and will be
              governed by their respective licenses.
            </li>

            <li className=" text-start text-lg md:text-xl tracking-tight text-white/70 ml-5">
              Ownership: The author retains ownership of the Item but grants you
              a license under these terms. This agreement is between you and the
              Item&apos;s author. astrae.design (Astrae) is not a party to this
              agreement.
            </li>
          </ul>
          <p className=" mt-6 text-start text-lg md:text-xl tracking-tight text-white/70">
            Thank you for supporting the authors by adhering to these licensing
            terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicensingPage;
