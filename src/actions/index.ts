import axios from "axios";
import { Project, TypeProjects } from "../types";

export const getProjects = async () => {
    try {
        const res = await axios.get("https://backend-myportfolio-mjf2.onrender.com/projects");
        const projects: TypeProjects = res.data;
        return projects; 
    } catch(error) {
        console.log("GET PROJECTS", error);
    }
};

export const getProject = async (id: string) => {
    try {
        const res = await axios.get("https://backend-myportfolio-mjf2.onrender.com/projects/"+id);
        const project: Project = res.data;
        return project; 
    } catch(error) {
        console.log("GET PROJECT", error);
    }
};