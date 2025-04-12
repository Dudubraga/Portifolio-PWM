const translations = {
    "en-US": {
        aboutMe: "About Me",
        projects: "Projects",
        contact: "Contact",
        skills: "Skills",
        welcomeMessage: "Welcome to my portfolio!",
        aboutDescription: `Currently a Computer Science student at UNICAP. 
            I have a passion for continuously learning and navigating the 
            fascinating world of technology. As a Competitive Programmer, 
            I delve into algorithms that help solve diverse problems, which 
            is a source of endless intrigue for me.`,
        projectsTitle: "My Projects",
        contactTitle: "Contact Me",
        skillsTitle: "My Skills",
        projectsTitle1: "Competitive Programming",
        projectsTitle2: "Lounge do Açaí",
        projectsTitle3: "Password Game",
        projectsDescription1: `
                Competitive Programming is a mind sport where 
                programmers compete to <b>solve problems</b> using 
                programming languages such as <b>C++</b>.<br>
                It is a great way to improve your <b>problem-solving
                skills</b> and learn new <b>algorithms and data structures</b>.
                <br><br>
                In the past two years I have participated in several 
                competitions made by the <b>Brazilian Computer Society</b> 
                and the <b>International Collegiate Programming Contest</b>.
                <br><br>
                Learn more about my competitive programming by clicking 
                the button below.`,
        projectsDescription2: `
                This project consists of a <b>self-service system</b> 
                developed to enhance the efficiency and user 
                experience at the <b>Lounge do Açaí</b>, located at 
                Universidade Católica de Pernambuco.
                <br><br>
                The system allows users to place orders through a 
                <b>mobile application</b>, which are then sent to the 
                kitchen via a <b>bluetooth printer</b>. This 
                integration optimizes the ordering process and 
                improves communication between customers and staff.
                <br><br>
                Check out the project on GitHub by clicking the button below.`,
        projectsDescription3: `
                This project is a simple game where the user has to 
                <b>guess a password</b>. The password is a string of 4 
                characters, which can be letters or numbers. The user 
                has as many attempts to guess the password as they want.
                <br><br>
                The game is developed using <b>HTML</b>, <b>CSS</b>, and 
                <b>JavaScript</b>. It is a great way to practice your 
                programming skills and have fun at the same time.
                <br><br>
                You can play the game by clicking the button below.`,
        projectsButton1: "Learn More",
        projectsButton2: "Project's GitHub",
        projectsButton3: "Try to guess the password",
        contactMessage1: `
            Feel free to reach out to me through my social media channels 
            or send me a message directly:`,
        contactMessage2: "Send me a message",
        contactForm1: "Name:",
        contactForm2: "Email:",
        contactForm3: "Message:",
        contactFormButton: "Send",
        skillsCategory1: "Programming Languages",
        skillsCategory2: "Tools and Technologies",
    },
    "pt-BR": {
        aboutMe: "Sobre Mim",
        projects: "Projetos",
        contact: "Contato",
        skills: "Habilidades",
        welcomeMessage: "Bem-vindo ao meu portfólio!",
        aboutDescription: `Atualmente sou estudante de Ciência da Computação 
            na UNICAP. Tenho paixão por aprender e explorar o fascinante mundo 
            da tecnologia. Como Programador Competitivo, me dedico ao estudo 
            de algoritmos para resolver os mais variados problemas,o que é uma 
            fonte inesgotável de interesse para mim.`,
        projectsTitle: "Meus Projetos",
        contactTitle: "Fale Comigo",
        skillsTitle: "Minhas Habilidades",
        projectsTitle1: "Programação Competitiva",
        projectsTitle2: "Lounge do Açaí",
        projectsTitle3: "Jogo da Senha",
        projectsButton1: "Saiba Mais",
        projectsButton2: "GitHub do Projeto",
        projectsButton3: "Tente adivinhar a senha",
        projectsDescription1: `
            A Programação Competitiva é onde programadores 
            competem para <b>resolver problemas</b> usando linguagens de 
            programação como o <b>C++</b>. É uma forma de aprimorar 
            suas habilidades de <b>resolução de problemas</b> e aprender 
            novos <b>algoritmos e estruturas de dados</b>.
            <br><br>
            Nos últimos dois anos, participei de diversas competições 
            realizadas pela <b>Sociedade Brasileira de Computação</b> e pelo 
            <b>International Collegiate Programming Contest (ICPC)</b>. 
            <br><br>
            Saiba mais sobre programação competitiva clicando no botão abaixo.`,
            projectsDescription2: 
            `Este projeto consiste em um <b>sistema de 
            autoatendimento</b> desenvolvido para melhorar a eficiência e a 
            experiência do usuário no <b>Lounge do Açaí</b>, localizado na 
            Universidade Católica de Pernambuco.
            <br><br>
            O sistema permite que os usuários façam pedidos por meio de um 
            <b>aplicativo móvel</b>, que são enviados para a cozinha via uma 
            <b>impressora bluetooth</b>. Essa integração otimiza o processo 
            de pedidos e melhora a comunicação entre clientes e funcionários.
            <br><br>
            Confira o projeto no GitHub clicando no botão abaixo.`,
        projectsDescription3: 
            `Este projeto é um jogo simples onde o usuário precisa <b>adivinhar 
            uma senha</b>. A senha é uma sequência de 4 caracteres, que podem 
            ser letras ou números. O usuário tem várias tentativas para adivinhar 
            a senha.
            <br><br> 
            O jogo foi desenvolvido usando <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b>. 
            É uma ótima maneira de praticar suas habilidades de programação e se divertir 
            ao mesmo tempo.
            <br><br>
            Você pode jogar clicando no botão abaixo.`,
        contactMessage1: `
            Sinta-se à vontade para entrar em contato comigo através das minhas
            redes sociais ou enviar uma mensagem diretamente:`,
        contactMessage2: "Me envie uma mensagem",
        contactForm1: "Nome:",
        contactForm2: "Email:",
        contactForm3: "Mensagem:",
        contactFormButton: "Enviar",
        skillsCategory1: "Linguagens de Programação",
        skillsCategory2: "Ferramentas e Tecnologias",
    },
};

function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value; 
    const content = translations[selectedLanguage]; 

    document.getElementById("link-AboutMe").textContent = content.aboutMe;
    document.getElementById("link-Projects").textContent = content.projects;
    document.getElementById("link-Contact").textContent = content.contact;
    document.getElementById("link-Skills").textContent = content.skills;

    document.querySelector(".welcome-message h1").textContent = "Eduardo Costa Braga";
    document.querySelector(".welcome-message p:nth-child(2)").textContent = content.welcomeMessage;
    document.querySelector(".welcome-message p:nth-child(3)").textContent = content.aboutDescription;

    document.getElementById("Projects").textContent = content.projectsTitle;
    document.getElementById("Contact").textContent = content.contactTitle;
    document.getElementById("Skills").textContent = content.skillsTitle;

    document.getElementById("project-title-1").textContent = content.projectsTitle1;
    document.getElementById("project-title-2").textContent = content.projectsTitle2;
    document.getElementById("project-title-3").textContent = content.projectsTitle3;
    document.getElementById("project-button-1").textContent = content.projectsButton1;
    document.getElementById("project-button-2").textContent = content.projectsButton2;
    document.getElementById("project-button-3").textContent = content.projectsButton3;
    document.getElementById("project-description-1").innerHTML = content.projectsDescription1;
    document.getElementById("project-description-2").innerHTML = content.projectsDescription2;
    document.getElementById("project-description-3").innerHTML = content.projectsDescription3;

    document.getElementById("contact-message-1").textContent = content.contactMessage1;
    document.getElementById("contact-message-2").textContent = content.contactMessage2;
    document.getElementById("contact-form-1").textContent = content.contactForm1;
    document.getElementById("contact-form-2").textContent = content.contactForm2;
    document.getElementById("contact-form-3").textContent = content.contactForm3;
    document.getElementById("contact-form-button").textContent = content.contactFormButton;

    document.getElementById("skills-category-1").textContent = content.skillsCategory1;
    document.getElementById("skills-category-2").textContent = content.skillsCategory2;
}

function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("show");
}

function closeMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.remove("show");
}
