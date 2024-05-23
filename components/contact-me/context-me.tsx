import Image from "next/image";
import square from "../../public/svg/square.svg";
import
{
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaceBookImage, GithubImage, InstagramImage, LinkdinImage, ThreadImage, TwitterImage } from "@/public/svg";




const socialMedia = [
    {
        id: 1,
        icon: InstagramImage,
        name: "Instagram",
        username: "@dhz.lab",
        link: "https://www.instagram.com/dhz.lab/",
    },
    {
        id: 2,
        icon: TwitterImage,
        name: "X / Twitter",
        username: "@Az_Zun1",
        link: "https://x.com/Az_Zun1",
    },
    {
        id: 3,
        icon: LinkdinImage,
        name: "Linkedin",
        username: "@Arjun Dahal",
        link: "https://www.linkedin.com/in/arjun-dahal-152a20250/",
    },
    {
        id: 3,
        icon: FaceBookImage,
        name: "Facebook",
        username: "@arjun",
        link: "",
    },
    {
        id: 3,
        icon: GithubImage,
        name: "Github",
        username: "@ArzunDahal",
        link: "https://github.com/ArzunDhz",
    },
    {
        id: 3,
        icon: ThreadImage,
        name: "Thread",
        username: "@Zun99",
        link: "",
    },
];

export function SectionTwo()
{
    return (
        <div className=" col-span-5 grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div className="w-full relative col-span-1">
                <Image
                    src={square}
                    alt="square"
                    className="w-full h-full object-cover opacity-80 rounded-2xl"
                />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 h-full w-full gap-4">
                    {socialMedia.map((item) => (
                        <Card
                            key={item.id}
                            className="p-4 flex flex-col items-center sm:items-start  bg-background "
                        >
                            <Image src={item.icon} alt="Icon" className="w-16 h-16" />
                            <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                            <p className="text-muted-foreground">{item.username}</p>
                            <Button className="mt-4" size="sm" asChild>
                                <a rel="noopener noreferrer" target="_blank" href={item.link}>Follow</a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}