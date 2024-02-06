"use client";
import CardProject from "@/app/components/cardProject/card-project";
import { ProjectType } from "@/app/types/Project";
import { Repo } from "@/app/types/Repo";
import { UserFill } from "@/app/types/User";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

export default function ProjectSection() {
    const octokit = new Octokit({ auth: process.env.GIT_KEY });
    const [data, setData] = useState<JSX.Element[]>()

    function mountCards(projects: ProjectType[]) {
        var mounted = projects.map(item => {
            return <CardProject
                {...item}
                key={item.id} />
        })
        setData(mounted)
    }

    function setProperties(projects: ProjectType[], repos: Repo[]) {
        if (projects.length === 0 || repos.length === 0) return
        projects.forEach(project => {
            var repo = repos.find(it => it.full_name === project.full_name)
            if (repo !== undefined) {
                if (repo.image) {
                    project.image = repo.image
                }
                project.priority = repo.priority
            }
        })
    }

    useEffect(() => {
        octokit.request('GET /users/brmsdi/repos', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then(response => {
            var projects: ProjectType[] = response.data
                .filter((element: { full_name: string; }) => UserFill.repos_projects.map(repo => repo.full_name).includes(element.full_name))
                .map((project: ProjectType) => project)
            setProperties(projects, UserFill.repos_projects)
            projects.sort((it1, it2) => it1.priority - it2.priority)
            mountCards(projects)
        }).catch(error => {
            
        })
    }, [])

    return (
        <section className={`
        flex flex-col w-screen gap-6
        sm:px-10
        `}>
            <h1 className={`
                font-bold text-xl
                `}>Projetos</h1>
            <div className={`flex flex-wrap justify-center gap-8
            sm:justify-evenly
            `} >
                {data}
            </div>
        </section>
    )
}