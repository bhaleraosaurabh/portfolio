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
			"Leading the development of B2B SaaS product, ensuring high-quality deliverables within deadlines.",
			"Collaborating with cross-functional teams to define, design, and ship new features.",
			"Managing and mentoring a team of developers, fostering a culture of learning and growth.",
			"Conducting code reviews to maintain code quality, scalability, and adherence to best practices.",
			"Coordinating with stakeholders to translate business requirements into technical solutions.",
			"Ensuring responsive web design and cross-browser compatibility for web applications.",
			"Successfully implemented scalable architectures using modern frameworks like React.js and Molecular Services.",
			"Optimized application performance by leveraging React Hooks.",
			"Improved team efficiency by introducing streamlined development workflows and continuous integration.",
			"Created and maintained reusable npm libraries to standardize and streamline development across projects.",
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
			"Designed and implemented modern UI solutions, improving user engagement.",
			"Collaborated closely with stakeholders to translate business requirements into technical deliverables.",
			"Enhanced application performance by optimizing Redux state management and implementing modular components.",
			"Guided front-end team to construct adaptable user interfaces with React.js, improving UI efficiency and user engagement.",
			"Pioneered the development of a comprehensive component library in React, standardizing UI elements across projects and reducing development time.",
			"Spearheaded the redesign of a client-facing web portal, employing advanced technologies such as React.js and Redux.",
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
			"Developed responsive user interfaces ensuring cross-platform compatibility.",
			"Debugged and refactored legacy code, significantly improving application efficiency.",
			"Collaborated with designers and back-end developers to deliver seamless user experiences.",
			"Implemented cross-platform UI features using modern JavaScript frameworks and APIs, streamlining user interaction.",
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
			"Provided technical support and maintenance for web applications, minimizing system downtime.",
			"Improved system usability by identifying and resolving performance bottlenecks.",
			"Implemented new features and fixes.",
			"Collaborated with cross-functional teams.",
			"Managed version control using Git.",
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
			"On-call sales/cross-sales/upsells and upgrade support",
			"Worked on on-call sales/cross-sales/upsells and upgrade support",
		],
	},
	{
		id: "6",
		company: "Capita India Pvt. Ltd.",
		position: "Senior Customer Service Representative",
		duration: "2018 - 2020",
		description: "Email support and chat support over social media",
		achievements: [
			"Worked as a part of the team that provided email support for a B2C e-commerce website.",
			"Worked as a part of the team that provided chat support over X (Twitter) and Facebook for a B2C e-commerce website.",
			"Worked as a part of the team that provided chat support for an international telecom provider.",
			"Spearheaded a service enhancement initiative that increased customer satisfaction scores by 20% through comprehensive staff training and process streamlining, utilizing CRM software to manage and track over 5,000 customer interactions monthly.",
			"Led a team of junior representatives to achieve a 30% reduction in average handling time by implementing strategic workflow optimizations and leveraging customer feedback analytics for continuous improvement.",
		],
	},
	{
		id: "7",
		company: "Mphasis Software And Services India Limited. An Eds Company.",
		position: "Customer Service Representative",
		duration: "2017 - 2017",
		description: "On-call support for an International Insurance Company",
		achievements: [
			"Executed accurate claims processing for an international insurance company using CRM systems and documentation tools, ensuring policyholder satisfaction.",
			"Collaborated with cross-functional teams to refine customer interaction protocols, achieving a 30% increase in first-call resolution rates and enhancing overall customer satisfaction scores by utilizing CRM systems and feedback analysis tools.",
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
