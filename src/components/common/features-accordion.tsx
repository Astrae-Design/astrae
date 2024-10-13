import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Proportions, Replace, ScanSearch } from "lucide-react";

const FeaturesAccordion = () => {
  return (
    <div className="flex flex-col items-start w-full mt-20">
      <h2 className="font-semibold text-2xl lg:text-3xl text-white text-center">
        Features
      </h2>
      <Accordion type="multiple" className="w-full mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Code /> What if I just want a single website?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            At Studio IX, we value collaboration and believe in working closely
            with our partners throughout the project lifecycle. By choosing us,
            you benefit from a cohesive team approach, encompassing design,
            development, and project management expertise for a streamlined and
            comprehensive solution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <ScanSearch /> What if I just want a single website?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Turnaround time for most tasks typically depends on the scope and
            complexity of the project, but we strive to deliver efficient and
            timely results, communicating transparently with partners throughout
            the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Replace /> What if I just want a single website?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            If you&apos;re seeking to have just a single website developed,
            Studio IX can still accommodate your needs efficiently, offering
            tailored solutions to meet your specific requirements and goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <Proportions /> What if I just want a single website?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            If you&apos;re not satisfied with the initial design, we offer
            revision rounds to ensure we meet your expectations, working closely
            with you to refine the design until it aligns perfectly with your
            vision and preferences at no additional cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FeaturesAccordion;
