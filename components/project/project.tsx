"use client";

import { cn } from "@/lib/utils";
import DotPattern from "../magiui/dot-pattern";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { projectData } from "@/constants/project";
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { Globe2Icon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { BentoGrid } from "../magiui/bento-grid";


export const DotPatternDemo2 = ({ name }: { name: string }) =>
{
    return (
        <div className="col-span-5 relative flex h-[20vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20  shadow-sm">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                {name}
            </p>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    );
};


export const Project = () =>
{

    return (
        <>
            {projectData.map((item, index) => (
                <Card key={index} className=" lg:col-span-1 md:col-span-2 bg-background col-span-5 h-fit  ">
                    <CardContent className="  pt-2">
                        <video src={item.video} loop muted autoPlay className="pointer-events-none mx-auto rounded-sm h-40 w-full shadow-sm border-2 object-cover object-top">
                        </video>
                    </CardContent>
                    <CardHeader>{item.name}</CardHeader>
                    <CardDescription className="px-5 h-[200px]">{item.description}</CardDescription>
                    <CardFooter className=" gap-x-2 items-start flex h-[100px] flex-wrap ">
                        {item.techStack.map((item, index) => (
                            <Badge key={index}>{item}</Badge>
                        ))}
                    </CardFooter>
                    <CardFooter>
                        <Link href={item.url}>
                            <Button variant={"link"}>
                                <GlobeIcon className=" mr-2" />
                                {item.url}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
};
