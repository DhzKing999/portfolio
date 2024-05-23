import { SectionTwo } from "@/components/contact-me/context-me";
import { HeroIntroduction, ImagePlaceHolder } from "@/components/hero";
import { BentoGrid } from "@/components/magiui/bento-grid";
import { DotPatternDemo2, Project } from "@/components/project/project";
import { DockDemo } from "@/components/skill/dock-box";
import { OrbitingCirclesDemo } from "@/components/skill/orbital-box";

export default function BentoDemo()
{
  return (
    <>
      <BentoGrid>
        <HeroIntroduction />
        <ImagePlaceHolder />
        <OrbitingCirclesDemo />
        <DockDemo />
      </BentoGrid>
      <BentoGrid className="auto-rows-auto  pt-10">
        <DotPatternDemo2 name="Project" />
        <Project />
      </BentoGrid>
      <BentoGrid className="auto-rows-auto  pt-10">
        <DotPatternDemo2 name="Contact Me" />
        <SectionTwo />
      </BentoGrid>
    </>
  );
}
