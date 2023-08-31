export interface Experience {
    message:     string;
    experiences: ExperienceElement[];
}

export interface ExperienceElement {
    dateRange:    string;
    location:     string;
    organization: string;
    role:         string;
    description:  string;
    chips:        Chip[];
}

export interface Chip {
    name: string;
}


// Skills
export interface Skill {
    message: string;
    skills:  SkillElement[];
}

export interface SkillElement {
    name:     string;
    icon:     string;
    category: Category;
}

export enum Category {
    Languages = "languages",
    Libraries = "libraries",
    Tools = "tools",
    UIUX = "ui/ux",
}

// project
export interface Project {
    message:  string;
    projects: ProjectElement[];
}

export interface ProjectElement {
    title:       string;
    year:        string;
    description: string;
    imageURL:    string;
    url:         string;
    chips:       Chip[];
}

export interface Chip {
    name: string;
}

