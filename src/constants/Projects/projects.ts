import Netflix from './Netflix.png'
import Bankapp from './Bankapp.png'
import Crud from './Crud.png'
import CRF from './CRF.png'
import Tech from './Tech.png'
import FoodDelivery from './6.png'
import Clothes from './7.png'


interface Projects {
    id:number;
    title:string;
    img:string;
    tech: Array<string>;
    description: string;
    deploy: string;
    git: string
}

export const ProjectsArray: Array<Projects> = [
    { id:1,
        title:'Netflix clone',
        img: `${Netflix}`,
        deploy: 'https://jlins-netflixclone.netlify.app',
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix',
        git: 'https://github.com/juliolecy/Netflix-clone'
    },
    { id:2,
        title:'BankApp',
        img: `${Bankapp}`,
        deploy: 'https://jlins-bankapp.netlify.app',
        tech:['Javascript', 'React',  'Tailwind', 'Typescript',],
        description: 'Landing page de um banco fictício',
        git: 'https://github.com/juliolecy/bank-app'
    },
    { id:3,
        title:'To do',
        deploy: 'https://jlins-todo.netlify.app',
        img: `${Crud}`,
        tech: ['Javascript', 'React', 'Typescript'],
        description: 'Lista de tarefas',
        git: 'https://github.com/juliolecy/To-do-list'
    },
    {
        id:4,
        title: 'Page transitions',
        deploy: 'https://flamengoatemorrer.netlify.app',
        img:`${CRF}`,
        tech: ['FramerMotion', 'React'],
        description: "Página feita utilizando o Flamengo como tema, objetivo de treinar a utilização da biblioteca Framer Motion",
        git: 'https://github.com/juliolecy/flamengo-page-transitions'

    }

]