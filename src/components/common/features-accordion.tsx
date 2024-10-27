import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Proportions, Puzzle, ScanSearch } from "lucide-react";

const FeaturesAccordion = () => {
  return (
    <div className="flex flex-col items-start w-full mt-20">
      <h2 className="font-semibold text-2xl lg:text-3xl text-white text-center">
        Features
      </h2>
      <Accordion type="multiple" className="w-full mt-6">
        <AccordionItem
          className=" bg-black border border-white/10"
          value="item-1"
        >
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Code /> Animations / Effects
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Includes expressive animations. Tweak effects with a few clicks and
            capture your audience&apos;s attention when they land on your
            website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className=" bg-black border border-white/10"
          value="item-2"
        >
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Proportions /> Responsive Design
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Fully responsive out of the box. Visually tweak your breakpoints and
            design your site on a familiar free-form canvas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className=" bg-black border border-white/10"
          value="item-3"
        >
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <ScanSearch /> SEO & Performance
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Sites that rank on search engines are fast, have well-structured
            content, and are accessible to everyone. Framer uses powerful
            technologies and all the tricks in the book to make your template
            perform by default.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className=" bg-black border border-white/10"
          value="item-4"
        >
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Puzzle /> Components
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Components offer reusability across pages, with changes applied to
            all instances. They also offer an easy way to create animations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FeaturesAccordion;
