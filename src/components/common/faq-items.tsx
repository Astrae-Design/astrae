import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqItems() {
  return (
    <Accordion type="multiple" className="w-full md:max-w-3xl mt-10 md:mb-20">
      <AccordionItem className="bg-black border border-white/10" value="item-1">
        <AccordionTrigger>
          What do I get when I purchase a template?
        </AccordionTrigger>
        <AccordionContent>
          When you purchase a template, you get complete access to all the code
          and assets necessary to set up and customize the website. Each
          template includes detailed documentation to guide you through
          installation and setup.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-black border border-white/10" value="item-2">
        <AccordionTrigger>
          Can I customize the templates to fit my brand?
        </AccordionTrigger>
        <AccordionContent>
          Yes, our templates are fully customizable! You can adjust colors,
          layouts, content, and more to align with your brand. All templates are
          built with Next.js, making it easy to tailor the code to your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-black border border-white/10" value="item-3">
        <AccordionTrigger>
          Do I need coding knowledge to use these templates?
        </AccordionTrigger>
        <AccordionContent>
          Basic knowledge of HTML, CSS, and JavaScript is recommended for
          customization, but each template comes with detailed instructions,
          making it accessible for both beginners and advanced developers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-black border border-white/10" value="item-4">
        <AccordionTrigger>
          Will I receive updates if the template is improved?
        </AccordionTrigger>
        <AccordionContent>
          Yes, when you purchase a template, you get lifetime access to any
          updates or improvements we make. We&apos;ll notify you about updates
          and provide instructions for implementing them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-black border border-white/10" value="item-5">
        <AccordionTrigger>
          What if I need help setting up the template?
        </AccordionTrigger>
        <AccordionContent>
          We offer dedicated support to help you get started! If you encounter
          any issues or have questions, reach out to us, and our team will
          assist you with setup and customization.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
