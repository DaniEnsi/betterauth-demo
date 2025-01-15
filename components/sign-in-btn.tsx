"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";

export function SignInButton() {
	const { data: session } = useSession();

	return (
		<Link
			href={session?.session ? "/dashboard" : "/sign-in"}
			className="flex justify-center"
		>
			<Button className="gap-2 justify-between" variant="default">
				{!session?.session ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.2em"
						height="1.2em"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2z"
						></path>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.2em"
						height="1.2em"
						viewBox="0 0 24 24"
					>
						<path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12z"></path>
					</svg>
				)}
				<span>{session?.session ? "Dashboard" : "Sign In"}</span>
			</Button>
		</Link>
	);
}

export function SignInFallback() {
	return (
		<Link href="/sign-in" className="flex justify-center">
			<Button className="gap-2 justify-between" variant="default">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.2em"
					height="1.2em"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2z"
					></path>
				</svg>
				<span>Sign In</span>
			</Button>
		</Link>
	);
}
