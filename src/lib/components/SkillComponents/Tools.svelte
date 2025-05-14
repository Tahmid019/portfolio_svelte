<script lang="ts">
	import TechSTack from '$lib/components/ui/TechSTack.svelte';
const proglangs: { name: string; image: string }[] = [
		{
			name: 'C',
			image: 'https://img.shields.io/badge/C-blue?style=for-the-badge&logo=c&logoColor=white'
		},
		{
			name: 'C++',
			image:
				'https://img.shields.io/badge/C++-blue?style=for-the-badge&logo=c%2B%2B&logoColor=white'
		},
		{
			name: 'Python',
			image:
				'https://img.shields.io/badge/Python-yellow?style=for-the-badge&logo=python&logoColor=white'
		},
		{
			name: 'Dart',
			image: 'https://img.shields.io/badge/Dart-blue?style=for-the-badge&logo=dart&logoColor=white'
		},
		{
			name: 'TypeScript',
			image:
				'https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white'
		},
		{
			name: 'MATLAB',
			image:
				'https://img.shields.io/badge/MATLAB-orange?style=for-the-badge&logo=mathworks&logoColor=white'
		},
		{
			name: 'R',
			image: 'https://img.shields.io/badge/R-blue?style=for-the-badge&logo=r&logoColor=white'
		}
	];

	const frameworks: { name: string; image: string }[] = [
		{
			name: 'OpenCV',
			image:
				'https://img.shields.io/badge/OpenCV-darkblue?style=for-the-badge&logo=opencv&logoColor=white'
		},
		{
			name: 'Flask',
			image:
				'https://img.shields.io/badge/Flask-black?style=for-the-badge&logo=flask&logoColor=white'
		},
		{
			name: 'TensorFlow',
			image:
				'https://img.shields.io/badge/TensorFlow-orange?style=for-the-badge&logo=tensorflow&logoColor=white'
		},
		{
			name: 'Keras',
			image: 'https://img.shields.io/badge/Keras-red?style=for-the-badge&logo=keras&logoColor=white'
		},
		{
			name: 'PyTorch',
			image:
				'https://img.shields.io/badge/PyTorch-orange?style=for-the-badge&logo=pytorch&logoColor=white'
		},
		{
			name: 'Pandas',
			image:
				'https://img.shields.io/badge/Pandas-blue?style=for-the-badge&logo=pandas&logoColor=white'
		},
		{
			name: 'NumPy',
			image:
				'https://img.shields.io/badge/NumPy-blue?style=for-the-badge&logo=numpy&logoColor=white'
		},
		{
			name: 'Matplotlib',
			image:
				'https://img.shields.io/badge/Matplotlib-darkblue?style=for-the-badge&logo=python&logoColor=white'
		},
		{
			name: 'Seaborn',
			image:
				'https://img.shields.io/badge/Seaborn-darkblue?style=for-the-badge&logo=python&logoColor=white'
		},
		{
			name: 'Scrapy',
			image:
				'https://img.shields.io/badge/Scrapy-darkgreen?style=for-the-badge&logo=scrapy&logoColor=white'
		},
		{
			name: 'Web3',
			image:
				'https://img.shields.io/badge/Web3-black?style=for-the-badge&logo=web3dotjs&logoColor=white'
		},
		{
			name: 'Flutter',
			image:
				'https://img.shields.io/badge/Flutter-blue?style=for-the-badge&logo=flutter&logoColor=white'
		},
		{
			name: 'Svelte',
			image:
				'https://img.shields.io/badge/Svelte-orange?style=for-the-badge&logo=svelte&logoColor=white'
		},
		{
			name: 'SvelteKit',
			image:
				'https://img.shields.io/badge/SvelteKit-black?style=for-the-badge&logo=svelte&logoColor=white'
		},
		{
			name: 'React',
			image:
				'https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white'
		}
	];

	const weapons: { name: string; image: string }[] = [
		{
			name: 'Visual Studio Launcher',
			image:
				'https://img.shields.io/badge/Visual%20Studio-purple?style=for-the-badge&logo=visualstudiocode&logoColor=white'
		},
		{
			name: 'Sublime Text',
			image:
				'https://img.shields.io/badge/Sublime%20Text-black?style=for-the-badge&logo=sublimetext&logoColor=white'
		},
		{
			name: 'PyCharm',
			image:
				'https://img.shields.io/badge/PyCharm-green?style=for-the-badge&logo=pycharm&logoColor=white'
		},
		{
			name: 'Android Studio',
			image:
				'https://img.shields.io/badge/Android%20Studio-green?style=for-the-badge&logo=androidstudio&logoColor=white'
		},
		{
			name: 'MATLAB',
			image:
				'https://img.shields.io/badge/MATLAB-orange?style=for-the-badge&logo=mathworks&logoColor=white'
		},
		{
			name: 'R Studio',
			image:
				'https://img.shields.io/badge/R%20Studio-blue?style=for-the-badge&logo=r&logoColor=white'
		},
		{
			name: 'Figma',
			image:
				'https://img.shields.io/badge/Figma-black?style=for-the-badge&logo=figma&logoColor=white'
		},
		{
			name: 'Canva',
			image:
				'https://img.shields.io/badge/Canva-blue?style=for-the-badge&logo=canva&logoColor=white'
		}
	];
</script>

<div class="Por-container scale-[0.95] px-4 md:px-14 lg:scale-[1] lg:px-20">
	<!-- Programming Languages -->
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
		<TechSTack title={'Programming Languages'} badges={proglangs} />
	</div>

	<div class="my-4 h-px w-full bg-gray-400/25"></div>

	<!-- Frameworks -->
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
		<TechSTack title={'Frameworks'} badges={frameworks} />
	</div>

	<div class="my-4 h-px w-full bg-gray-400/25"></div>

	<!-- Tools & Platforms -->
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
		<TechSTack title={'Tools & Platforms'} badges={weapons} />
	</div>
</div>
