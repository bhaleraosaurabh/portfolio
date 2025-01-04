"use client";

import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types/experience";
import { motion } from "framer-motion";

const experiences: Experience[] = [
	{
		id: "1",
		company: "AIT Global India Pvt. Ltd.",
		position: "Technology Lead",
		duration: "2024 - Present",
		description: "Leading development of B2b SaaS application",
		achievements: [
			"Led team of 8 developers",
			"Implemented new features and fixes",
			"Collaborated with cross-functional teams",
			"Managed version control using Git",
			"Participated in code reviews and code quality assurance",
		],
		technologies: [
			"React",
			"Node.js",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Zustand",
			"Prisma",
			"React Query",
			"Formik",
			"Yup",
			"Nestjs",
		],
	},
	{
		id: "2",
		company: "AIT Global India Pvt. Ltd.",
		position: "Senior UI Developer",
		duration: "2023 - 2024",
		description: "Leading development of B2b SaaS application",
		achievements: [
			"Led team of 8 developers",
			"Implemented new features and fixes",
			"Collaborated with cross-functional teams",
			"Managed version control using Git",
			"Participated in code reviews and code quality assurance",
		],
		technologies: [
			"React",
			"Node.js",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Zustand",
			"Prisma",
			"React Query",
			"Formik",
			"Yup",
			"Nestjs",
			"Redux",
			"Redux-toolkit",
			"Redux Saga",
			"React Router",
		],
	},
	{
		id: "3",
		company: "AIT Global India Pvt. Ltd.",
		position: "UI Developer",
		duration: "2022 - 2023",
		description: "Development of B2b SaaS application",
		achievements: [
			"Implemented new features and fixes",
			"Collaborated with cross-functional teams",
			"Managed version control using Git",
		],
		technologies: [
			"React",
			"Node.js",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Redux",
			"Redux-toolkit",
			"Redux Saga",
			"React Router",
		],
	},
	{
		id: "4",
		company: "AIT Global India Pvt. Ltd.",
		position: "Application Support Engineer",
		duration: "2021 - 2022",
		description: "Support and Development of B2b SaaS application",
		achievements: [
			"Implemented new features and fixes",
			"Collaborated with cross-functional teams",
			"Managed version control using Git",
		],
		technologies: [
			"React",
			"Node.js",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Redux",
			"Redux-toolkit",
			"Redux Saga",
			"React Router",
		],
	},
	{
		id: "5",
		company: "Tech Mahindra Business Services.",
		position: "Customer Service Representative",
		duration: "2020 - 2021",
		description: "On-call sales/cross-sales/upsells and upgrade support",
		achievements: [
			"Participated in on-call sales/cross-sales/upsells and upgrade support",
		],
	},
	{
		id: "6",
		company: "Capita India Pvt. Ltd.",
		position: "Senior Customer Service Representative",
		duration: "2018 - 2020",
		description: "Email support and chat support over social media",
		achievements: [
			"Worked as a part of the team that provided email support for B2c e-commerce website",
			"Worked as a part of the team that provided chat support over x(formelry twitter) and facebook for B2c e-commerce website",
			"Worked as a part of the team that provided chat support for an International Telecom provider",
		],
	},
	{
		id: "7",
		company: "Mphasis Software And Services India Limited. An Eds Company.",
		position: "Customer Service Representative",
		duration: "2017 - 2017",
		description: "On-call support for an International Insurance Company",
		achievements: [
			"Worked as a part of the team that provided support for claims support for an International Insurance Company",
		],
	},
];

export function Timeline() {
	return (
		<div className="max-w-4xl mx-auto p-4 w-full">
			{experiences.map((experience, index) => (
				<motion.div
					key={experience.id}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.2 }}
					className="relative pl-8 pb-12 border-l border-border last:pb-0"
				>
					<div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
					<div className="flex items-center gap-4 mb-2">
						<div>
							<h3 className="text-xl font-semibold">{experience.position}</h3>
							<p className="text-muted-foreground">{experience.company}</p>
						</div>
						<span className="ml-auto text-sm text-muted-foreground">
							{experience.duration}
						</span>
					</div>
					<p className="mb-4 text-muted-foreground">{experience.description}</p>
					<ul className="mb-4 space-y-1">
						{experience.achievements.map((achievement, i) => (
							<li key={i.toString()} className="text-sm text-muted-foreground">
								• {achievement}
							</li>
						))}
					</ul>
					<div className="flex flex-wrap gap-2">
						{experience.technologies
							? experience.technologies.map((tech) => (
									<Badge key={tech} variant="secondary">
										{tech}
									</Badge>
								))
							: null}
					</div>
				</motion.div>
			))}
		</div>
	);
}
