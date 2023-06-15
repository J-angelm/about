import emoji from 'react-easy-emoji';

const introductionText: string = `mi nombre es Jorge Angel, soy Ingeniero Computacional radicado en la fascinante Ciudad de México. Con experiencia en desarrollo de aplicaciones web java para IBM y una sólida formación en programación y tecnología, he estado explorando el mundo web desde los 13 años, tiempo en el que pasaba mi tiempo construyendo foros para clanes del video juego *Age of Empires III*.

Además de mi pasión por la tecnología, tengo una vida llena de intereses diversos. La música, la danza y el cine son algunas de mis grandes pasiones. También disfruto explorar las artes, sumergirme en la historia, descubrir nuevas ramas de la ciencia y explorar los intrincados caminos de las matemáticas y la filosofía.

Fuera del ámbito profesional, he dedicado años a la danza folklórica mexicana y he desarrollado habilidades en tocar la guitarra y cantar (aunque principalmente lo hago en mi tiempo libre). Además, mi mente siempre está bullendo de ideas innovadoras que espero poder convertir en realidad.

Como persona, me considero resiliente, transparente, creativo, analítico y visionario. Estas cualidades me ayudan a enfrentar desafíos con una mentalidad proactiva y encontrar soluciones innovadoras en mi vida cotidiana.

Este blog es mi espacio personal para compartir mis experiencias, conocimientos y reflexiones. Aquí encontrarás una mezcla de artículos sobre tecnología, música, cine, historia y mucho más. Mi objetivo es entretener y, espero, inspirar a otros con mis publicaciones.

¡Gracias por unirte a este viaje! Espero que disfrutes del contenido que tengo preparado y que nuestras experiencias se entrelacen en este emocionante mundo virtual. ¡Bienvenidos a mi blog personal!`;

export default introductionText;

export const greeting = {
	username: 'j-angelm',
	title: '¡hola!',
	body: introductionText ,
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};


export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'Your github link',
	linkedin: 'Your linkedin link',
	email: 'your email link',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "subtitle for skill",
	describeSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "subtitle for contact",
	introduce: emoji("your introduce❤"),
	view: true
}