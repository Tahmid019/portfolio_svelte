import BentoSkeleton from '$lib/components/ui/BentoSkeleton.svelte';

import IconArrowWaveRightUp from '$lib/assets/test.svg';
import IconBoxAlignRightFilled from '$lib/assets/test.svg';
import IconBoxAlignTopLeft from '$lib/assets/test.svg';
import IconClipboardCopy from '$lib/assets/test.svg';
import IconFileBroken from '$lib/assets/test.svg';
import IconSignature from '$lib/assets/test.svg';
import IconTableColumn from '$lib/assets/test.svg';

import tt from '$lib/assets/tt.jpeg';

const items = [
    {
        title: 'The Dawn of Innovation',
        description: 'Explore the birth of groundbreaking ideas and inventions.',
        header: BentoSkeleton,
        headerImage: tt,
        icon: IconClipboardCopy
    },
    {
        title: 'The Digital Revolution',
        description: 'Dive into the transformative power of technology.',
        header: BentoSkeleton,
        icon: IconFileBroken
    },
    {
        title: 'The Art of Design',
        description: 'Discover the beauty of thoughtful and functional design.',
        header: BentoSkeleton,
        icon: IconSignature
    },
    {
        title: 'The Power of Communication',
        description: 'Understand the impact of effective communication in our lives.',
        header: BentoSkeleton,
        icon: IconTableColumn
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: BentoSkeleton,
        icon: IconArrowWaveRightUp
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: BentoSkeleton,
        icon: IconBoxAlignTopLeft
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: BentoSkeleton,
        icon: IconBoxAlignRightFilled
    }
];



export default items;