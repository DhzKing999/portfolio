import
{
    Card,
} from "@/components/ui/card"
import Image from "next/image"
import { FlagIcon } from "@/public/images"


export const HeroIntroduction = () =>
{
    return (
        <>
            <Card className="  relative flex flex-col  dark:bg-background dark:border-2 items-start justify-end p-4 lg:col-span-3 col-span-5  ">
                <h1 className=" text-6xl  font-semibold">Hey I am Arjun Dahal </h1>
                <div className=" flex items-center">
                    <h2 className=" text-4xl">I am a Web Developer working in Nepal</h2>
                    <Image
                        className=" size-12 rotate-[20deg] "
                        alt="flag"
                        src={FlagIcon}
                    />
                </div>
                <AnimatedGradientTextDemo />


            </Card>
        </>)
}

export const ImagePlaceHolder = () =>
{
    return (
        <>
            <div className="lg:col-span-1 col-span-5  h-full ">
                <Image
                    alt="Featured Movie"
                    className="mx-auto h-full overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                    height="735"
                    //src={PPIcon}
                    src={'https://media.licdn.com/dms/image/D5603AQFokwve6Pjbkw/profile-displayphoto-shrink_800_800/0/1700114214163?e=1721865600&v=beta&t=Lxi5rXBARGkff1OBwS7dEle_pPwECvXaeuYSN6HC7KI'}
                    width="500"
                />
            </div>
        </>)
}



import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../magiui/animated-shiny-text"
import { cn } from "@/lib/utils"
import AnimatedGradientText from "../magiui/animated-gradient-text"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export async function TextShimmerDemo()
{
    return (
        <div className="z-10 flex min-h-[16rem] items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-4  transition ease-out hover:text-neutral-400 hover:duration-300 hover:dark:text-white">
                    <span className=" font-bold">✨Download CV </span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>
        </div>
    );
}

export async function AnimatedGradientTextDemo()
{
    return (
        <Link rel="noopener noreferrer" target="_blank" href={'https://utfs.io/f/598c6857-eba5-4671-bbf8-bbcdc22d8803-f80be.pdf'}>
            <div className="z-10 flex min-h-[16rem] items-center justify-center">
                <AnimatedGradientText className=" cursor-pointer">
                    <span
                        className={cn(
                            `inline animate-gradient text-xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        )}
                    >
                        Download CV
                    </span>
                    <ChevronRight className="ml-1 size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
            </div>
        </Link>
    );
}