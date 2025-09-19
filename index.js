function openLink(link) {
	if (link) {
		if (link === '/') {
			window.location.assign(link);
		} else {
			window.open(link, '_blank');
		}
	}
}


function getTo(tag) {
	document.querySelector(tag).scrollIntoView({ behavior: 'smooth' });
}

const skill_icons =
	[
		['icons/AngularJS.svg', 'AngularJS'],
		['icons/AWS.svg', 'AWS'],
		['icons/Azure.svg', 'Azure'],
		['icons/D3.js.svg', 'D3'],
		['icons/JavaScript.svg', 'JavaScript'],
		['icons/Java.svg', "Java"],
		['icons/MongoDB.svg', 'MongoDB'],
		['icons/NET core.svg', '.NET'],
		['icons/Node.js.svg', 'NodeJS'],
		['icons/PostgresSQL.svg', 'PostgresSQL'],
		['icons/PyTorch.svg', 'PyTorch'],
		['icons/scikit-learn.svg', 'Scikit-learn'],
		['icons/Snowflake.svg', 'Snowflake'],
		['icons/TensorFlow.svg', 'TensorFlow'],
		['icons/TypeScript.svg', 'TypeScript'],
		['icons/Gitlab.svg', 'Gitlab'],
		['icons/Github.svg', 'Github'],
	];

const skill_wrapper = document.querySelector('.skills-icons-wrapper');
for (let item of skill_icons) {
	let newDiv = document.createElement("div");
	let img = document.createElement("img");
	img.src = item[0];
	img.alt = item[1];
	newDiv.classList.add('icon-wrapper');
	newDiv.appendChild(img);
	skill_wrapper.appendChild(newDiv);

}


const projList = [
	{
		title: 'Personal Website',
		time: 'Present',
		stack: 'Angular, GitHub Pages',
		detail: [
			'Designed and developed a personal portfolio website using Angular to showcase projects and skills, enhancing online presence and professional visibility',
			'Implemented responsive design principles to ensure optimal viewing experience across various devices and screen sizes',
			'Utilized GitHub Pages for seamless deployment and version control, enabling easy updates and maintenance'
		],
		link: '/',
		image: ''
	},
	{
		title: 'ASA Five College Hackathon',
		time: 'Spring 2025',
		stack: 'Python, R',
		detail: [
			'Led a team to Panel victory in the ASA Five College Hackathon by developing a comprehensive analysys of real-estate data',
			'Utilized Python for data cleaning and preprocessing, R for statistical analysis, and Excel for data visualization to derive actionable insights',
			'Presented findings to a panel of judges, demonstrating the ability to communicate complex data insights effectively'
		],
		link: 'https://www.science.smith.edu/datafest/#:~:text=Mount%20Holyoke%20takes%20home%20the,ll%20see%20you%20next%20year!',
		image: ''
	},
	{
		title: 'Data Augmentation Task',
		time: 'Fall 2024',
		stack: 'Python, TensorFlow, transformers',
		detail: [
			'Developed a data augmentation pipeline using TensorFlow/Keras to enhance the diversity of training datasets for image classification tasks',
			'Implemented various augmentation techniques such as single image embeddings through OpenDiffusion and image-to-image embeddings through SLERP to improve model robustness and generalization',
			'Evaluated the impact of data augmentation on model performance through systematic experimentation and analysis'
		],
		link: 'https://github.com/VinSTyagi/CS682_Research',
		image: ''
	},
	{
		title: "HackUMass XII Project",
		time: 'Fall 2024',
		stack: 'MongoDB, Express.js, React, Node.js, JavaScript, HTML/CSS',
		detail: [
			'Developed a full-stack web application using the MERN stack to facilitate event organization and management for university clubs',
			'Collaborated with a team of developers to design and deploy the application, ensuring a seamless user experience',
			'Placed top 5 in the UI/UX category at HackUMass XII'
		],
		link: '',
		image: ''
	},
	{
		title: 'Full stack COVID-19 Dashboard',
		time: 'Spring 2025',
		stack: 'JavaScript, R, HTML/CSS, Git, Node.js, Express.js, D3.js',
		detail: [
			'Developed a full-stack web application using Node.js and Express.js to provide real-time COVID-19 data visualization and analysis',
			'Implemented interactive charts and graphs using D3.js to display trends and patterns in COVID-19 cases, vaccinations, and other relevant metrics',
			'Collaborated with a team to design the user interface and ensure a smooth user experience across different devices'
		],
		link: 'https://github.com/VinSTyagi/CS571_Proj',
		image: ''
	},
	{
		title: 'ClimaSense',
		time: 'Spring 2024',
		stack: 'React Native, JavaScript, HTML/CSS, Git, Node.js, Express.js',
		detail: [
			'Co-developed a mobile application using React Native to provide users with real-time air quality data and personalized health recommendations',
			'Implemented features such as location-based air quality monitoring, health tips, and alerts for poor air quality conditions',
			'Collaborated with a team to design the user interface and ensure a smooth user experience across different devices'
		],
		link: 'https://github.com/VinSTyagi/CS326_Web_App',
		image: ''
	},
	{
		title: 'Personal Stock Tracker',
		time: 'Winter 2023',
		stack: 'Python',
		detail: [
			'Created a Python application, implementing Brownian Motion and informed stock drift to provide insights into portfolio performance and market trends',
			'Implemented features such as real-time stock price updates, historical data analysis, and performance visualization using libraries like Matplotlib and Pandas'
		],
		link: 'https://github.com/VinSTyagi/Stock_Trend_Tracker',
		image: ''
	},
	{
		title: 'Game Development with Unity',
		time: 'Fall 2024',
		stack: 'C#, Unity',
		detail: [
			'Developed a 3D platformer game using Unity, focusing on game mechanics, level design, and user experience',
			'Implemented features such as character movement, enemy AI, and interactive environments using C# scripting',
			'Collaborated with a team to design the game concept and ensure a cohesive gaming experience'
		],
		link: 'https://github.com/VinSTyagi/CS576_FinalProject',
		image: ''
	},
	{
		title: 'Password Manager Application',
		time: 'Summer 2023',
		stack: 'Java, SQLite',
		detail: [
			'Developed a secure password manager application using Java to help users encrypt their passwords safely',
			'Implemented features such as password encryption, user authentication, and password generation to enhance security and usability',
			'Collaborated with a team to design the user interface and ensure a smooth user experience'
		],
		link: 'https://github.com/VinSTyagi/PasswordManager',
		image: ''
	}
]
const proj_wrapper = document.querySelector('.proj-item-wrapper');
for (let item of projList) {
	let newDiv = document.createElement('div');
	newDiv.classList.add('card');
	let subDiv = document.createElement('div');
	subDiv.classList.add('info-summary-link');
	subDiv.innerHTML = "<p>" + item.title + "</p ><p>" + item.time + "</p><p>" + item.stack + "</p>"
	subDiv.addEventListener("click", (event) => {
		openLink(item.link);
	})

	newDiv.appendChild(subDiv);
	proj_wrapper.appendChild(newDiv);
}
