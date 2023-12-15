type Resume = {
    id: number,
    title: string,
    typeIcon: number
}
type Life = {
    id: number,
    moment: string,
    description: string
}
export type Project = {
    id: number
    name: string,
    full_name: string,
    description: string,
    icons?: string,
    homepage?: string,
    html_url: string
    image: string
}
export type Technology = {
    id: number
    title: string,
    description: string,
    image: string
}
export type Contact = {
    id: number
    title: string,
    text: string
    link?: string,
    image: string
}
export type Repo = {
    full_name: string
}
export const myRepos: Repo[] = [
    {
        full_name: "brmsdi/GCSystem"
    }, {
        full_name: "brmsdi/GCSystemAndroid"
    }
]
export type User = {
    name: string,
    surname: string,
    fullName: string,
    photo: string,
    specialty: string,
    resume: Resume[],
    life: Life[],
    names_projects: Repo[],
    technologies: Technology[],
    contacts: Contact[]
}

export const UserFill: User = {
    name: 'Wisley',
    surname: 'Marques',
    fullName: 'Wisley Bruno Marques França',
    photo: '',
    specialty: 'Desenvolvedor fullstack',
    resume: [
        {
            id: 1,
            title: 'Formado em Sistemas de Informação',
            typeIcon: 1
        },
        {
            id: 2,
            title: 'Desenvolvimento de sistemas, sites e aplicativos',
            typeIcon: 2
        },
        {
            id: 3,
            title: 'Automação de testes de software',
            typeIcon: 3
        },
        {
            id: 4,
            title: 'Levantamento de requisitos de sistemas',
            typeIcon: 4
        },
        {
            id: 5,
            title: 'Modelagem de sistemas',
            typeIcon: 5
        },
        {
            id: 6,
            title: 'Modelagem, criação e manutenção de banco de dados',
            typeIcon: 6
        }
    ],
    life: [
        {
            id: 1,
            moment: "2019",
            description: "Jovem aprendiz – Secretaria de Estado de Educação e Qualidade do Ensino, SEDUC-AM. Primeiro contato com linguagem de programação e processamento de dados."
        },
        {
            id: 2,
            moment: "2020",
            description: "Iniciando com linguagem C e conhecendo conceitos de estrutura de dados. Adotei o Java com a primeira linguagem de programação orientada a objetos. Comecei a desenvolvedor sistemas desktop. Me aprofundei em conceitos avançados como threads, interfaces, paradigmas de linguagens de programação, programação reativa, framework spring, API rest.."
        },
        {
            id: 3,
            moment: "2021",
            description: "Concluí o ensino superior em Sistemas de Informação no Centro Universitário Fametro, Manaus-AM."
        },
        {
            id: 4,
            moment: "2022",
            description: "Iniciei desenvolvimento WEB com HTML5, CSS3, Javascript e ReactJS. Desenvolvimento e integração com APIs rest desenvolvidas em Java com Spring Framework."
        },
        {
            id: 5,
            moment: "2023",
            description: "Iniciei o desenvolvimento de aplicativos Android com kotlin e me aprofundei em conceitos de microserviços, escalabilidade e computação em nuvem."
        },
        {
            id: 6,
            moment: "Até o momento",
            description: "Estudando inglês e buscando vaga de desenvolvedor."
        }
    ],
    names_projects: myRepos,
    technologies: [{
        id: 1,
        title: "Desenvolvimento com Java",
        description: "Desenvolvimento de API rest com as principais tecnologias do ecossistema Java. Spring Framework, programação orientada a objetos, programação em três camadas, clean code, SOLID...",
        image: "java-original-wordmark.svg"
    },
    {
        id: 2,
        title: "Testes unitários",
        description: "Testes unitários com Java: JUnit, Mockito e TDD.",
        image: "java-plain.svg"
    },
    {
        id: 3,
        title: "Microsserviços",
        description: "Microsserviços com Spring Cloud, Api Gateway, Load Balancer e CI/CD.",
        image: "spring-original-wordmark.svg"
    },
    {
        id: 4,
        title: "Mensageria",
        description: "Mensageria com Apache Kafka.",
        image: "apachekafka-original-wordmark.svg"
    },
    {
        id: 5,
        title: "Docker",
        description: "Docker, docker compose, docker hub, swarm e Kubernetes.",
        image: "docker-plain-wordmark.svg"
    },
    {
        id: 6,
        title: "Desenvolvimento com kotlin",
        description: "Desenvolvimento de aplicativos Android usando Kotlin. Padrão MVVM, retrofit2, coroutines...",
        image: "kotlin-original.svg"
    },
    {
        id: 7,
        title: "Desenvolvimento frontend",
        description: "Desenvolvimento de páginas web com HTML5, Tailwind, ReactJS, Typescript, Redux...",
        image: "react-original-wordmark.svg"
    }
],
    contacts: [{
        id: 1,
        title: "Email",
        text: "srwisley.dev@gmail.com",
        link: "mailto:srwisley.dev@gmail.com",
        image: "email.svg"
    },
    {
        id: 2,
        title: "WhatsApp",
        text: "(92) 99107-1491",
        link: "https://wa.me/5592991071491",
        image: "whatsapp.svg"
    }]
}