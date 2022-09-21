import Netflix from './Netflix.png'
import Two from './2.png'
import Three from './4.png'
import Four from './4.png'
import Five from './5.png'
import Six from './6.png'
import Seven from './7.png'


interface Projects {
    id:number;
    title:string;
    img:string;
    tech: Array<string>;
    description: string;
}

export const ProjectsArray: Array<Projects> = [
    { id:1,
        title:'Netflix clone',
        img: `${Netflix}`,
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix'
    },
    { id:2,
        title:'Netflix clone',
        img: `${Two}`,
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix'
    },
    { id:3,
        title:'Netflix clone',
        img: `${Three}`,
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix'
    },
    { id:4,
        title:'Netflix clone',
        img: `${Four}`,
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix'
    },
    { id:5,
        title:'Netflix clone',
        img: `${Five}`,
        tech: ['Javascript', 'HTML',  'CSS', 'Typescript'],
        description: 'Projeno no qual clono a interface da Netflix'
    },

]