import BentoSkeleton from '$lib/components/ui/BentoSkeleton.svelte';

import IconTick from '$lib/assets/svg/check_circle_outline.svg';
import IconTickChanges from '$lib/assets/svg/published_with_changes.svg';

import edusync from '$lib/assets/edusync.png';
import coffee from '$lib/assets/coffe.jpeg';
import coding from '$lib/assets/coding.gif';
import neurathon25 from '$lib/assets/neurathon25.gif';

const items = [
    {
        title: 'EduSync',
        description: 'Lip-Synchronized Audio-Video Speech-2-Speech Translator, with multilingual support, for educational video translation.',
        header: BentoSkeleton,
        headerImage: edusync,
        icon: IconTickChanges
    },
    {
        title: '8085-Simulator',
        description: 'An Object-oriented based approach on simulation of the 8085-Microprocessor Programming-architecture.',
        header: BentoSkeleton,
        headerImage: coding,
        icon: IconTickChanges
    },
    {
        title: 'Neurathon-2025',
        description: 'Developed the Webside for the Neurathon-2025. Managing online-Round for the Hackathon and providing Information regarding the upcomming events.',
        header: BentoSkeleton,
        headerImage:neurathon25,
        icon: IconTick
    },
    {
        title: 'The Power of Communication',
        description: 'Understand the impact of effective communication in our lives.',
        header: BentoSkeleton,
        icon: IconTick
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: BentoSkeleton,
        icon: IconTick
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: BentoSkeleton,
        icon: IconTick
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: BentoSkeleton,
        icon: IconTick
    }
];



export default items;