
import React from "react";
import { Dock, DockIcon } from "../magiui/dock";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import { SkillIcons } from "@/public/svg";
import { BorderBeam } from "../magiui/border-beam";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo()
{
    return (
        <div className="lg:col-span-3 col-span-5   relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border  ">
            <BorderBeam size={350} duration={12} delay={9} />
            <Dock>
                {SkillIcons.map((item, index) => (
                    <DockIcon key={index}>
                        <Image
                            src={item}
                            alt="f"
                        />
                    </DockIcon>
                ))}
            </Dock>
            {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
        </div>
    );
}
