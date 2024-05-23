import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { BorderBeam } from "./border-beam";

export const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) =>
{
    return (
        <div
            className={cn(
                "grid w-[80%] mx-auto auto-rows-[50vh] grid-cols-4 gap-4 ",
                className,
            )}
        >
            {children}
        </div>
    );
};
