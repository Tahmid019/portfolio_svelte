import ml_bg from '$lib/assets/ml_gif.gif';
import fl_bg from '$lib/assets/webp/flutter.webp';
import fin_bg from '$lib/assets/webp/fin.webp';

import kawai_bg from '$lib/assets/kawai.jpeg';
import lec1 from '$lib/assets/ml_lecture.jpg';

import sunrise from '$lib/assets/sunrise1.gif';
import action1 from '$lib/assets/action1.gif';
import neura1 from '$lib/assets/neurathon25.gif';

export const pors = [
  {
    year: '2024',
    title: 'ML Team - Executive Member',
    description:
      'Joined in 2024, as the Machine Learning Team Member of ML Club NIT Silchar. Contributed in project based in Natural Language Processing and Speech‑2‑Speech research. Organized the Orientation, Club Classes and Neurathon‑2025.',
    image: ml_bg,
    date: 'August 2024 - present',
    link: 'https://www.mlclubnits.com',
    timeline: [
      {
        date: 'Aug 2024',
        title: 'Joined ML Club',
        description: 'Official onboarding & first meeting with the team.',
        image: sunrise
      },
	  {
        date: 'Entire 2024',
        title: 'Project Building',
        description: 'Building Projects in Team, completing EDA and focusing in Research.',
        image: action1
      },
	  {
        date: 'Sept 2024',
        title: 'Club Orientation',
        description: 'Organized and Managed the Official CLub Orientation.',
        image: lec1,
      },
	  {
        date: 'Jan 2025',
        title: 'Neurathon 2025',
        description: 'Design, Website development and Event Management',
        image: neura1,
      },
	  {
        date: 'Mar 2025',
        title: 'Executive',
        description: 'ML Core Team',
        image: kawai_bg,
      },
    ]
  },
  {
    year: '2024',
    title: 'GDGC‑Flutter Developer',
    description:
      'Joined in 2024, as the Flutter Member of GDGC NIT Silchar. Contributed in project based in Flutter and Firebase. Contributed in the Orientations and Workshops (Flutter Forward).',
    image: fl_bg,
    date: 'September 2024 - present',
    link: 'https://gdscnits.in'
  },
  {
    year: '2024',
    title: 'Finance Club‑ Web Team',
    description:
      'Joined in 2024, as the Web Developer of Finance Club NIT Silchar. Contributed in Finance Club Official Website Making and Event Management.',
    image: fin_bg,
    date: 'June 2024',
    link: 'https://financeclubnits.in/'
  }
]


export default pors;
