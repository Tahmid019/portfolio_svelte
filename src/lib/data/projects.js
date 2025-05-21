import BentoSkeleton from '$lib/components/ui/BentoSkeleton.svelte';

import IconTick from '$lib/assets/svg/check_circle_outline.svg';
import IconTickChanges from '$lib/assets/svg/published_with_changes.svg';

import edusync from '$lib/assets/webp/edusync.webp';
// import coffee from '$lib/assets/webp/coffe.webp';
import coding from '$lib/assets/coding.gif';
import neurathon25 from '$lib/assets/neurathon25.gif';
import voice_bg from '$lib/assets/opera.gif';
import forest_bg from '$lib/assets/webp/forest_fire.webp';
import fin_bg from '$lib/assets/fin_web.gif';
import gnd_bg from '$lib/assets/aquarium.gif';

const items = [
	{
		title: 'LipSync/EduSync',
		description:
			'Lip-Synchronized Audio-Video Speech-2-Speech Translator, with multilingual support, for educational video translation.',
		header: BentoSkeleton,
		headerImage: edusync,
		icon: IconTickChanges,
		link: 'https://lipsync2.vercel.app/'
	},
	{
		title: '8085-Simulator',
		description:
			'An Object-oriented based approach on simulation of the 8085-Microprocessor Programming-architecture.',
		header: BentoSkeleton,
		headerImage: coding,
		icon: IconTickChanges,
		link: 'https://github.com/Tahmid019/8085_simulator.git'
	},
	{
		title: 'Neurathon-2025',
		description:
			'Developed the Webside for the Neurathon-2025. Managing online-Round for the Hackathon and providing Information regarding the upcomming events.',
		header: BentoSkeleton,
		headerImage: neurathon25,
		icon: IconTick,
		link: 'https://neurathon.mlclubnits.com/'
	},
	{
		title: 'Voice Cloning',
		description:
			'An end-2-end voice cloning web-application focussing on realtime user-given voice feature extraction and audio generation for any given text.',
		header: BentoSkeleton,
		headerImage: voice_bg,
		icon: IconTickChanges,
		link: 'https://github.com/LipSync-Edusync/multispeaker-tts'
	},
	{
		title: 'Fire Detection',
		description:
			'Drone Based Forest Fire Detection, for rescue missions , navigating and providing safer path for hostages.',
		header: BentoSkeleton,
		headerImage: forest_bg,
		icon: IconTick,
		link: 'https://github.com/Tahmid019/fire-detection.git'
	},
	{
		title: 'Finance Club Website',
		description:
			'Collaboration project for developing an official website for Finance Club, NIT SIlchar.',
		header: BentoSkeleton,
		headerImage: fin_bg,
		icon: IconTick,
		link: 'https://financeclubnits.in/'
	},
	{
		title: 'Ground Water Level Predictor',
		description:
			'A Time Series ML Model Fed on Ground water and Terrain Data from 2019-2022, to predict ground water level of different areas in Assam.',
		header: BentoSkeleton,
		headerImage: gnd_bg,
		icon: IconTick,
		link: 'https://github.com/Tahmid019/ground-Water-Level-Predictor.git'
	}
];

export default items;
