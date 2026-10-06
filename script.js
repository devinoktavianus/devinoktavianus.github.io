/* =========================================================
   NAVIGATION
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const navMenu =
    document.querySelector(".nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


mobileMenuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    "gym-junkie": {

        number: "01",

        category: "S1 · UI/UX",

        title: "Gym Junkie",

        course:
            "User Experience Research and Design",

        overview:
            "Gym Junkie is a mobile fitness application designed to support users with their workout and fitness needs. The concept includes workout goals, calorie tracking, progress, and food or eating tracking.",

        work:
            "I worked on the UI/UX design of the application, including the early user flow and onboarding experience. The onboarding was designed to understand what users want to achieve with GymJunkie before entering the main application.",

        output:
            "The project resulted in a Figma prototype covering the initial application experience, including onboarding, login, sign in with Google, getting started, and user goal selection.",

        tools: [
            "Figma",
            "UI/UX",
            "User Research"
        ],

        links: [

            {
                label: "Figma Prototype",

                url:
                    "https://www.figma.com/design/tFkZSPDyv6l4p4Rljx7rd6/Gym-Junkie?node-id=0-1&p=f&t=kfALNMn4M5pV0Ex7-0"
            }

        ]

    },


    "lively": {

        number: "02",

        category: "S1 · UI/UX LAB",

        title: "Lively",

        course:
            "UI UX LAB",

        overview:
            "Lively is a mobile application concept designed to make users feel more comfortable appearing on camera while live streaming. The concept uses virtual characters and real-time filters to give users different ways to appear on camera.",

        work:
            "I worked on the UI/UX design based on the business case provided in the lab. I translated the case into the application's interface and user flow.",

        output:
            "The project resulted in a Figma UI/UX prototype based on the Lively business case and its proposed user experience.",

        tools: [
            "Figma",
            "UI/UX",
            "Business Case"
        ],

        links: [

            {
                label: "Figma Prototype",

                url:
                    "https://www.figma.com/design/KXXmaq4mUE0XviC5SErXw9/BS11-08-TM08?node-id=0-1&t=u8tB6KyCn29DtvTa-1"
            },

            {
                label: "Project Documentation",

                url:
                    "https://drive.google.com/drive/folders/1bn3-fZUKZrrV3YQ5s1XCHx7tY9QVs3Qf?usp=sharing"
            }

        ]

    },


    "tripiora": {

        number: "03",

        category: "S3 · PROGRAMMING FOR BUSINESS",

        title: "Tripiora",

        course:
            "Programming For Business",

        overview:
            "Tripiora is an all-in-one travel website concept designed to combine hotel, flight, and travel package services in one platform.",

        work:
            "I worked with a five-person group to design the Tripiora website concept in Figma. Users can select a country or destination, choose a travel package, and continue to the payment process.",

        output:
            "The project resulted in a website prototype presenting the travel booking flow and supporting travel services offered through the Tripiora concept.",

        tools: [
            "Figma",
            "Web Design",
            "Programming For Business"
        ],

        links: [

            {
                label: "Figma Prototype",

                url:
                    "https://www.figma.com/design/O4sC97UF08m4WqrH4BWlq3/Tripiora?node-id=0-1&t=6l8Zzm7woK0CjDgl-1"
            }

        ]

    },


    "data-modeling": {

        number: "05",

        category: "S4 · DATA MODELING",

        title: "Data Modeling",

        course:
            "Data Modeling",

        overview:
            "A group data modeling project using the School Grades & Demographic dataset. The project focused on preparing and organizing the dataset before working with the data model.",

        work:
            "I worked on the dataset preparation process, including removing duplicates, trimming whitespace, and standardizing the data. The project was completed as a group assignment.",

        output:
            "The project used the School Grades & Demographic dataset containing 3,649 rows and 21 variables and produced the prepared data and modeling work.",

        tools: [
            "Data Modeling",
            "Data Cleaning",
            "Oracle"
        ],

        links: [

            {
                label: "Project Files",

                url:
                    "https://drive.google.com/drive/folders/1F68tyIJwJWWpN2SvZn0jnsJBugcc8tka?usp=sharing"
            }

        ]

    },


    "data-visualization": {

        number: "06",

        category: "S4 · DATA VISUALIZATION",

        title: "Data Visualization",

        course:
            "Data Visualization",

        overview:
            "A data visualization project using the Global Data on Sustainable Energy dataset. The project covered data preparation, exploration, modeling, and dashboard development.",

        work:
            "I started with the raw Excel dataset, cleaned and prepared the data, created a Power Pivot model, explored the dataset, and developed an interactive dashboard in Tableau.",

        output:
            "The project resulted in a cleaned dataset, Power Pivot work, analysis, and an interactive Tableau dashboard for exploring patterns within the sustainable energy data.",

        tools: [
            "Microsoft Excel",
            "Power Pivot",
            "Tableau",
            "Data Visualization"
        ],

        links: [

            {
                label: "Project Files",

                url:
                    "https://drive.google.com/drive/folders/12SMnXpoXDdThuITf4F_bnG_zzte8_44v?usp=sharing"
            }

        ]

    },


    "weskill": {

        number: "07",

        category: "S4 · CREATIVITY & INNOVATION",

        title: "WeSkill",

        course:
            "Creativity and Innovation",

        overview:
            "WeSkill is a career development and recruitment platform concept designed to connect skill development, learning, assessment, and job opportunities in one ecosystem.",

        work:
            "I worked on the development of the WeSkill business idea and its UI/UX prototype. The concept focuses on helping users understand the skills they need, develop those skills, validate them, and connect with relevant career opportunities.",

        output:
            "The project resulted in a business concept and Figma prototype presenting the proposed user experience of the WeSkill platform.",

        tools: [
            "Figma",
            "UI/UX",
            "Business Idea",
            "AI Concept"
        ],

        links: [

            {
                label: "Figma Prototype",

                url:
                    "https://www.figma.com/design/7tGvSbuzwCRdEH3K4JWJi9/WeSkill-Proto?node-id=0-1&p=f&t=NS1JVtQepaZn7TP4-0"
            },

            {
                label: "Project Documentation",

                url:
                    "https://drive.google.com/drive/folders/1MXunUfXErv-3ELVOhlO_RLfeKVi-Sohq?usp=sharing"
            }

        ]

    },


    "healthcare-chatbot": {

        number: "08",

        category: "S4 · RESEARCH METHODS IN IS",

        title:
            "Healthcare Chatbot Trust Research",

        course:
            "Research Methods in Information Systems",

        overview:
            "A quantitative research project studying factors that influence user trust and continuance intention toward healthcare chatbots.",

        work:
            "I worked on the research with a group member, covering the research topic, literature review, questionnaire development, quantitative data collection, and analysis using SEM-PLS.",

        output:
            "The research examined Perceived Usefulness, Perceived Ease of Use, Perceived Risk, Trust, and Continuance Intention using questionnaire responses and SEM-PLS analysis.",

        tools: [
            "Research",
            "Google Forms",
            "SEM-PLS",
            "AI Chatbot"
        ],

        links: [

            {
                label: "Research Paper",

                url:
                    "https://docs.google.com/document/d/1-m_hN4W1TsBsPnr6p2HegIQRUNWUaLFOVTA2ejGxpVA/edit?usp=sharing"
            }

        ]

    }

};


/* =========================================================
   PROJECT MODAL ELEMENTS
========================================================= */

const projectModal =
    document.getElementById("projectModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalNumber =
    document.getElementById("modalNumber");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalOverview =
    document.getElementById("modalOverview");

const modalWork =
    document.getElementById("modalWork");

const modalOutput =
    document.getElementById("modalOutput");

const modalCourse =
    document.getElementById("modalCourse");

const modalTools =
    document.getElementById("modalTools");

const modalLinks =
    document.getElementById("modalLinks");


/* =========================================================
   OPEN PROJECT
========================================================= */

const projectButtons =
    document.querySelectorAll(".project-button");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        const project =
            projectData[projectId];

        if (!project) return;


        modalNumber.textContent =
            project.number;

        modalCategory.textContent =
            project.category;

        modalTitle.textContent =
            project.title;

        modalCourse.textContent =
            project.course;

        modalOverview.textContent =
            project.overview;

        modalWork.textContent =
            project.work;

        modalOutput.textContent =
            project.output;


        /* TOOLS */

        modalTools.innerHTML = "";

        project.tools.forEach(tool => {

            const element =
                document.createElement("span");

            element.className =
                "modal-tool";

            element.textContent =
                tool;

            modalTools.appendChild(element);

        });


        /* LINKS */

        modalLinks.innerHTML = "";

        project.links.forEach(link => {

            const element =
                document.createElement("a");

            element.className =
                "modal-link";

            element.href =
                link.url;

            element.target =
                "_blank";

            element.rel =
                "noopener noreferrer";

            element.innerHTML = `
                <span>${link.label}</span>
                <span>↗</span>
            `;

            modalLinks.appendChild(element);

        });


        /* SHOW */

        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("modal-open");

    });

});


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProjectModal() {

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


modalOverlay.addEventListener(
    "click",
    closeProjectModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .experience-card, .project-card, .connect-link"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
