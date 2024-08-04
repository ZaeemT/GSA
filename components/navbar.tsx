import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggler";
import { Separator } from "./ui/separator";

const Navbar = () => {
    return (
        <>
            <div className="mx-auto w-full max-w-2xl space-y-1 px-4">
                <div className="flex items-center">
                    <NavigationMenu className=" grid mx-auto w-full max-w-2xl my-auto px-4 justify-start items-center">
                        <NavigationMenuList>
                                <NavigationMenuItem >
                                    <div className="inline-block tracking-tighter font-extrabold text-2xl py-2 pr-4" style={{cursor:'default'}}>
                                        GSA Blog
                                    </div>
                                </NavigationMenuItem>
                                
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/create" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Add
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="justify-self-end">
                        <ThemeToggle />
                    </div>
                </div>
                <Separator className="my-2"/>
            </div>

        </>
    )
}

export default Navbar;