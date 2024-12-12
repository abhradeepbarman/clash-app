import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-md shadow-md px-10 py-5">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
                    Clash
                </h1>
                <h2 className="text-3xl font-bold mt-2">Login</h2>
                <p>Welcome Back</p>

                <form>
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Enter your password..."
                        />
                    </div>
                    <Link
                        className="text-right font-bold"
                        href={"/forget-password"}
                    >
                        <div>Forget Password?</div>
                    </Link>
                    <div className="mt-4">
                        <Button className="w-full">Submit</Button>
                    </div>
                </form>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <strong>
                        <Link href={"/register"}>Register</Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}

export default login;
