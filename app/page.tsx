import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SignInButton } from "@/components/sign-in-btn";

export default function Home() {
	const features = [
		"AI-powered job matching",
		"Smart CV analysis",
		"Instant job recommendations",
		"Professional network building",
		"Career growth insights",
		"Direct employer connections"
	];

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Transform Your Career Journey with HIR3D
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Let AI power your next career move. Upload your CV and get matched with your dream job instantly.
								</p>
							</div>
							<div className="space-x-4 flex justify-center">
								<Link href="/upload">
									<Button variant="outline" className="px-8 py-4">
										Upload CV
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								<div className="">
									<SignInButton />
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="grid gap-10 px-4 md:grid-cols-2 md:gap-16">
							<div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Why Choose HIR3D?
								</h2>
								<p className="mt-4 text-gray-500 dark:text-gray-400">
									Experience the future of job hunting with our cutting-edge AI technology and comprehensive career platform.
								</p>
							</div>
							<div className="grid gap-4">
								{features.map((feature, i) => (
									<div key={i} className="flex items-center gap-4">
										<CheckCircle className="h-5 w-5 text-primary" />
										<p className="text-gray-600 dark:text-gray-300">{feature}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
