import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = async ({ isAdminPage = false }) => {
    const isAdmin = false;
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="mx-auto px-4 py-4 flex items-center justify-between">
                <Link href={
                    isAdminPage ? "/admin" : "/"

                }
                    className="flex"
                >
                    <Image src={"/logo.png"} width={80} height={60} alt="logo"
                        className="object-contain rounded-md"
                    />
                    {
                        isAdminPage &&
                        <span className="text-sm text-gray-600">Admin</span>
                    }


                </Link>
                <div className="flex items-center space-x-4">
                    {isAdminPage ? <Link href={"/"}>
                        <Button variant="outline" className={"flex items-center gap-2"}>
                            <ArrowLeft size={18} />
                            <span className="hidden md:block">Back to App</span>
                        </Button>
                    </Link> : <SignedIn>
                        <Link href={"/saved-cars"}>
                            <Button>
                                <Heart size={18} />
                                <span className="hidden md:block">Saved Cars</span>
                            </Button>
                        </Link>
                        {!isAdmin ? <Link href={"/reservations"}>
                            <Button variant={"outline"}>
                                <CarFront size={18} />
                                <span className="hidden md:block">My Reservations</span>
                            </Button>
                        </Link>
                            :

                            <Link href={"/admin"}>
                                <Button variant={"outline"}>
                                    <Layout size={18} />
                                    <span className="hidden md:block">Admin Portal</span>
                                </Button>
                            </Link>}
                    </SignedIn>}

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/">
                            <Button variant={"outline"}>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10"
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </header >
    )
}

export default Header