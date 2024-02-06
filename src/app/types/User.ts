import { Contact } from "./Contact"
import { DEVICE, GalleryImage } from "./GalleryImage"
import { LifeType } from "./LifeType"
import { Repo } from "./Repo"
import { Resume } from "./Resume"
import { Technology } from "./Technology"

const COMPUTER = DEVICE.COMPUTER
const MOBILE = DEVICE.MOBILE 
export type User = {
    name: string,
    surname: string,
    fullName: string,
    photo: string,
    specialty: string,
    resume: Resume[],
    life: LifeType[],
    repos_projects: Repo[],
    technologies: Technology[],
    contacts: Contact[]
}
// REPOSITÓRIOS DO GITHUB QUE SERÃO ADICIONADOS AO PORTFOLIO 
export const myRepos: Repo[] = [
    {
        full_name: "brmsdi/GCSystem", 
        image: "/gallery/gcsystem_img_2.png",
        priority: 1
    }, {
        full_name: "brmsdi/GCSystemAndroid",
        image: "/android-plain-wordmark.svg",
        priority: 2
    }, {
        full_name: "brmsdi/GCSystemPayment",
        priority: 2
    }, {
        full_name: "brmsdi/SonecaApp",
        image: "/android-plain-wordmark.svg",
        priority: 3
    }, {
        full_name: "brmsdi/BuilderMaster",
        priority: 4
    }, {
        full_name: "brmsdi/ecommerce",
        priority: 4
    }, {
        full_name: "brmsdi/portfolio",
        priority: 4
    }
]
// GALERIA DE IMAGENS DE CADA PROJETO.
// ESTÃO RELACIONADOS COM OS REPOSITORIOS.
export const myGalleryImages : GalleryImage[] = [{
    id: 1,
    full_name: "brmsdi/GCSystem",
    images: [{
        id: 1,
        image: "/gallery/web/web_login.png",
        device: COMPUTER,
        description: "Tela de Autenticação"
    }, {
        id: 2,
        image: "/gallery/web/web_inicial_0.png",
        device: COMPUTER,
        description: "Tela inicial"
    }, {
        id: 3,
        image: "/gallery/web/web_inicial_0_r.png",
        device: COMPUTER,
        description: "Tela de navegação em dispositivos móveis"
    }, {
        id: 4,
        image: "/gallery/web/web_cond_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de condomínios"
    }, {
        id: 5,
        image: "/gallery/web/web_cond_1.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de condomínios com formulário de cadastro aberto"
    }, {
        id: 6,
        image: "/gallery/web/web_cond_r_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de condomínios com formulário de cadastro aberto em dispositivos móveis"
    }, {
        id: 7,
        image: "/gallery/web/web_contra_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de contratos"
    }, {
        id: 8,
        image: "/gallery/web/web_contra_1.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de contratos com formulário aberto"
    }, {
        id: 9,
        image: "/gallery/web/web_debito_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de débitos"
    }, {
        id: 10,
        image: "/gallery/web/web_debito_1.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de débitos com formulário aberto"
    }, {
        id: 11,
        image: "/gallery/web/web_func_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de funcionários com formulário aberto"
    }, {
        id: 12,
        image: "/gallery/web/web_loc_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de locatários com formulário aberto"
    }, {
        id: 13,
        image: "/gallery/web/web_rep_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de solicitações de reparo"
    }, {
        id: 14,
        image: "/gallery/web/web_rep_1.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de solicitações de reparo com formulário aberto"
    }, {
        id: 15,
        image: "/gallery/web/web_os_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de ordens de serviço"
    }, {
        id: 16,
        image: "/gallery/web/web_os_1.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de ordens de serviço com formulário aberto"
    }, {
        id: 17,
        image: "/gallery/web/web_os_2.png",
        device: COMPUTER,
        description: "Tela para selecionar as solicitações de reparo que serão incluídas em uma determinada ordem de serviço"
    }, {
        id: 18,
        image: "/gallery/web/web_os_3.png",
        device: COMPUTER,
        description: "Tela para selecionar os colaboradores que serão responsáveis pela ordem de serviço"
    }, {
        id: 19,
        image: "/gallery/web/web_os_4.png",
        device: COMPUTER,
        description: "Tela de detalhes de uma ordem de serviço"
    }, {
        id: 20,
        image: "/gallery/web/web_os_r_0.png",
        device: COMPUTER,
        description: "Tela de gerenciamento de ordens de serviço com formulário aberto em dispositivos móveis"
    }]
}, {
    id: 2,
    full_name: "brmsdi/GCSystemAndroid",
    images: [{
        id: 1,
        image: "/gallery/mobile/mobile_login_0.jpg",
        device: MOBILE,
        description: "Tela de autenticação"
    }, {
        id: 2,
        image: "/gallery/mobile/mobile_inicial_0.jpg",
        device: MOBILE,
        description: "Tela inicial do aplicativo"
    }, {
        id: 3,
        image: "/gallery/mobile/mobile_loc_menu_0.jpg",
        device: MOBILE,
        description: "Menu do locatário"
    }, {
        id: 4,
        image: "/gallery/mobile/mobile_loc_minha_conta_0.jpg",
        device: MOBILE,
        description: "Tela com dados cadastrais do locatário"
    }, {
        id: 5,
        image: "/gallery/mobile/mobile_rep_0.jpg",
        device: MOBILE,
        description: "Tela com as solicitações de reparo realizadas pelo usuário"
    }, {
        id: 6,
        image: "/gallery/mobile/mobile_rep_detalhes_0.jpg",
        device: MOBILE,
        description: "Tela de detalhes da solicitação de reparo"
    }, {
        id: 7,
        image: "/gallery/mobile/mobile_rep_novo_0.jpg",
        device: MOBILE,
        description: "Tela para solicitar um novo reparo"
    }, {
        id: 8,
        image: "/gallery/mobile/mobile_loc_debitos_0.jpg",
        device: MOBILE,
        description: "Tela com os débitos do usuário"
    }, {
        id: 9,
        image: "/gallery/mobile/mobile_loc_contratos_0.jpg",
        device: MOBILE,
        description: "Tela com os contratos do usuário"
    }, {
        id: 10,
        image: "/gallery/mobile/mobile_loc_contrato_pdf_0.jpg",
        device: MOBILE,
        description: "Tela com os detalhes do contrato. O arquivo poderá ser armazenado no dispositivo no formato PDF."
    }, {
        id: 11,
        image: "/gallery/mobile/mobile_inicial_1.jpg",
        device: MOBILE,
        description: "Menu do colaborador"
    }, {
        id: 12,
        image: "/gallery/mobile/mobile_os_0.jpg",
        device: MOBILE,
        description: "Tela com as ordens de serviço correspondentes ao cadastro do colaborador."
    }, {
        id: 13,
        image: "/gallery/mobile/mobile_os_detalhes_0.jpg",
        device: MOBILE,
        description: "Tela de detalhes da ordem de serviço."
    }, {
        id: 14,
        image: "/gallery/mobile/mobile_os_detalhes_1.jpg",
        device: MOBILE,
        description: "Tela de detalhes da ordem de serviço."
    }, {
        id: 15,
        image: "/gallery/mobile/mobile_os_novo_item_0.jpg",
        device: MOBILE,
        description: "Tela para adicionar novo item a um reparo da ordem de serviço em questão."
    }, {
        id: 16,
        image: "/gallery/mobile/mobile_senha_0.jpg",
        device: MOBILE,
        description: "Tela para solicitar código para troca de senha."
    }, {
        id: 17,
        image: "/gallery/mobile/mobile_senha_2_0.png",
        device: COMPUTER,
        description: "Código recebido da API do sistema. Verificar o GCSystem-WEB onde foi implementado o serviço de envio de E-mail."
    }, {
        id: 18,
        image: "/gallery/mobile/mobile_senha_2.jpg",
        device: MOBILE,
        description: "Tela para inserir o código recebido no E-mail."
    }, {
        id: 19,
        image: "/gallery/mobile/mobile_senha_3.jpg",
        device: MOBILE,
        description: "Tela para registrar a nova senha."
    },]
},{
    id: 3,
    full_name: "brmsdi/SonecaApp",
    images: [{
        id: 1,
        image: "/gallery/mobile/soneca_01.jpg",
        device: MOBILE,
        description: "Tela para inserir um novo alarme no bando de dados. Esta rotina inicia após o usuário realizar um clique no mapa, a latitude e longitude serão vinculados ao alarme."
    }, {
        id: 2,
        image: "/gallery/mobile/soneca_02.jpg",
        device: MOBILE,
        description: "Mapa com a marcação após a criação do novo alarme."
    }, {
        id: 3,
        image: "/gallery/mobile/soneca_03.jpg",
        device: MOBILE,
        description: "Tela com a lista de alarmes cadastrados no banco de dados."
    }, {
        id: 4,
        image: "/gallery/mobile/soneca_04.jpg",
        device: MOBILE,
        description: "Notificação executada após o usuário aproximar-se do local de destino. Esta rotina não necessita que o aplicativo esteja aberto e nem com acesso a internet, o GPS do dispositivo envia as informações de localização para o broadcast receiver do aplicativo e o alarme é executado."
    }]
}
]
// PERFIL DO USUÁRIO
export const UserFill: User = {
    name: 'Wisley',
    surname: 'Marques',
    fullName: 'Wisley Bruno Marques França',
    photo: '',
    specialty: 'Desenvolvedor de software',
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
            moment: "No início",
            description: "Jovem aprendiz – Secretaria de Estado de Educação e Qualidade do Ensino, SEDUC-AM. Primeiro contato com linguagem de programação e processamento de dados."
        },
        {
            id: 2,
            moment: "2020",
            description: "Iniciando com linguagem C e conhecendo conceitos de estrutura de dados. Adotei o Java como primeira linguagem de programação orientada a objetos. Comecei a desenvolvedor sistemas desktop. Me aprofundei em conceitos avançados como threads, interfaces, paradigmas de linguagens de programação, programação reativa, framework spring, API rest.."
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
    repos_projects: myRepos,
    technologies: [{
        id: 1,
        title: "Desenvolvimento com Java",
        description: "Desenvolvimento de API rest com as principais tecnologias do ecossistema Java. Spring Framework, programação orientada a objetos, programação em três camadas, clean code, SOLID...",
        image: "/java-original-wordmark.svg"
    },
    {
        id: 2,
        title: "Testes unitários",
        description: "Testes unitários com Java: JUnit, Mockito e TDD.",
        image: "/java-plain.svg"
    },
    {
        id: 3,
        title: "Microsserviços",
        description: "Microsserviços com Spring Cloud, Api Gateway, Load Balancer e CI/CD.",
        image: "/spring-original-wordmark.svg"
    },
    {
        id: 4,
        title: "Mensageria",
        description: "Mensageria com Apache Kafka.",
        image: "/apachekafka-original-wordmark.svg"
    },
    {
        id: 5,
        title: "Docker",
        description: "Docker, docker compose, docker hub, swarm e Kubernetes.",
        image: "/docker-plain-wordmark.svg"
    },
    {
        id: 6,
        title: "Desenvolvimento com kotlin",
        description: "Desenvolvimento de aplicativos Android usando Kotlin. Padrão MVVM, retrofit2, coroutines...",
        image: "/kotlin-original.svg"
    },
    {
        id: 7,
        title: "Desenvolvimento frontend",
        description: "Desenvolvimento de páginas web com HTML5, Tailwind, ReactJS, Typescript, Redux...",
        image: "/react-original-wordmark.svg"
    }, {
        id: 8,
        title: "Banco de dados",
        description: "Projeto, criação e manipulação de banco de dados relacionais e não relacionais. Comandos DDL, DML...",
        image: "/mysql-original-wordmark.svg"
    }
],
    contacts: [{
        id: 1,
        title: "Email",
        text: "srwisley.dev@gmail.com",
        link: "mailto:srwisley.dev@gmail.com",
        image: "/email.svg"
    },
    {
        id: 2,
        title: "WhatsApp",
        text: "(92) 99107-1491",
        link: "https://wa.me/5592991071491",
        image: "/whatsapp.svg"
    }]
}