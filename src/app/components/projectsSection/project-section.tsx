"use client";
import CardProject from "@/app/components/cardProject/card-project";
import { Project, UserFill } from "@/app/types/user";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

export default function ProjectSection() {
    const octokit = new Octokit({ auth: process.env.GIT_KEY });
    const [data, setData] = useState<JSX.Element[]>()

    function mountCards(projects: Project[]) {
        var mounted = projects.map(item => {
            return <CardProject
                id={item.id}
                name={item.name}
                full_name={item.full_name}
                description={item.description}
                icons={item.icons}
                homepage={item.homepage}
                html_url={item.html_url}
                image={item.image}
                key={item.id} />
        })
        setData(mounted)
    }

    useEffect(() => {
        octokit.request('GET /users/brmsdi/repos', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then(response => {
            var projects: Project[] = response.data
                .filter((element: { full_name: string; }) => UserFill.names_projects.map(repo => repo.full_name).includes(element.full_name))
                .map((project: Project) => project)
            mountCards(projects)
        }).catch(error => {
            console.log(error)
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