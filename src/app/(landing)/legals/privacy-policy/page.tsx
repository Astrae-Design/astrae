import LegalsHero from "@/sections/legals-hero";

const PrivacyPolicyPage = () => {
  return (
    <section>
      <LegalsHero
        title="Privacy Policy"
        description="This Privacy Policy outlines how Astrae Design collects, uses, and protects your personal information - Last Updated 06th October 2024"
      />
      <div className="container flex flex-col gap-8 md:max-w-4xl -mt-12">
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Information We Collect
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, or contact us for support. This
            may include your name, email address, and payment information.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            How We Use Your Information
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We use your information to provide and improve our services, process
            transactions, send you important updates, and personalize your
            experience with Astrae Design.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Data Security</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Third-Party Services
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We may use third-party services that collect, monitor and analyze
            this information to improve our service&apos;s functionality and
            user experience.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Your Rights</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            You have the right to access, correct, or delete your personal
            information. You may also object to or restrict certain processing
            of your data. To exercise these rights, please contact us.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">
            Changes to This Policy
          </h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &apos;last updated&apos; date.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className=" text-white font-medium text-3xl">Contact Us</h2>

          <p className=" text-start text-lg md:text-xl tracking-tight text-white/70">
            If you have any questions about this Privacy Policy, please contact
            us at support@astrae.design
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
