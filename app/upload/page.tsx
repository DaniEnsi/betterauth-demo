"use client";

import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2, Database, Brain } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ImageUpload from "@/components/upload-modal";

export default function UploadPage() {
	const [dialogOpen, setDialogOpen] = useState(false);

	const features = [
		{
			icon: <Brain className="h-5 w-5" />,
			title: "AI-Powered Matching",
			description: "Advanced algorithms match candidates to the perfect role"
		},
		{
			icon: <Database className="h-5 w-5" />,
			title: "Vast Database",
			description: "Join thousands of candidates in our growing talent pool"
		},
		{
			icon: <CheckCircle2 className="h-5 w-5" />,
			title: "Smart Analysis",
			description: "Get instant insights about your CV and potential matches"
		}
	];

	return (
		<div className="min-h-[80vh] flex flex-col items-center justify-center gap-12 px-4">
			{/* Hero Section */}
			<div className="text-center space-y-4 max-w-2xl">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
					Your Career, <span className="text-primary">Elevated</span>
				</h1>
				<p className="text-lg text-muted-foreground">
					Join our AI-powered talent pool and let us connect you with your dream job
				</p>
			</div>

			{/* Upload Dialog */}
			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogTrigger asChild>
					<Button size="lg" className="gap-2">
						<Upload className="h-5 w-5" />
						Upload Your CV
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Upload CV</DialogTitle>
						<DialogDescription>
							Upload your CV in PDF or DOCX format (max 10MB)
						</DialogDescription>
					</DialogHeader>
					
					<ImageUpload />
				</DialogContent>
			</Dialog>

			{/* Features */}
			<div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center p-4 space-y-2 rounded-lg border bg-card"
					>
						<div className="p-2 rounded-full bg-primary/10 text-primary">
							{feature.icon}
						</div>
						<h3 className="font-semibold">{feature.title}</h3>
						<p className="text-sm text-muted-foreground">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
} 