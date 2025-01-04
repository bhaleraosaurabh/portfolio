export interface Experience {
	id: string;
	company: string;
	position: string;
	duration: string;
	description: string;
	achievements: string[];
	technologies?: string[];
}

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	demoUrl?: string;
	githubUrl?: string;
	category: "Web" | "Mobile" | "AI" | "Other";
}

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	readingTime: string;
	categories: string[];
	slug: string;
}
