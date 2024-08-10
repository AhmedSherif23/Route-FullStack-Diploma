// ?=============== HTML ELEMENT ===============
const routeassiContainer = document.querySelector('#routeassiContainer');
const examsContainer = document.querySelector('#examsContainer');
const reactProjectsContainer = document.querySelector('#ReactProjects');

// ^=============== APP VARIABLES ===============
let codeURL = 'https://https://github.com/AhmedSherif23/Route-FullStack-Diploma';

let assignmentsList = [
    { title: 'Assignment-01 [First HTML]', demo: './AhmedSherif C43 Assignment 1 [First HTML]/index.html', img: './AhmedSherif C43 Assignment 1 [First HTML]/output.png', codeURL },
    { title: 'Assignment-02 [User Form]', demo: '././AhmedSherif C43 Assignment 2 [UserForm]/index.html', img: './AhmedSherif C43 Assignment 2 [UserForm]/output.png' },
    { title: 'Assignment-03 [Bakery Template]', demo: './AhmedSherif C43 Assignment 3 [Bakery Template]/index.html', img: './AhmedSherif C43 Assignment 3 [Bakery Template]/output.png', codeURL },
    { title: 'Assignment-04 [Fokir Template]', demo: './AhmedSherif C43 Assignment 4 [Fokir]/index.html', img: './AhmedSherif C43 Assignment 4 [Fokir]/output.png' },
    { title: 'Assignment-05 [Mealify Template]', demo: './AhmedSherif C43 Assignment 5 [Mealify]/index.html', img: './AhmedSherif C43 Assignment 5 [Mealify]/output.png', codeURL },
    { title: 'Assignment-06 [DevFolio Template]', demo: './AhmedSherif C43 Assignment 6 [DevFolio]/index.html', img: './AhmedSherif C43 Assignment 6 [DevFolio]/output.png', codeURL },
    { title: 'Assignment-07 [First JS]', demo: './AhmedSherif C43 Assignment 7 [First JS]/index.html', img: './AhmedSherif C43 Assignment 7 [First JS]/output.png', codeURL },
    { title: 'Assignment-08 [Random Quote JS & JSON]', demo: './AhmedSherif C43 Assignment 8 [Quote JS&JSON]/index.html', img: './AhmedSherif C43 Assignment 8 [Quote JS&JSON]/output.png', codeURL },
    { title: 'Assignment-09 [Bookmarker JS & LocalStorage]', demo: './AhmedSherif C43 Assignment 9 [BookMarker JS&LocalStorage]/index.html', img: './AhmedSherif C43 Assignment 9 [BookMarker JS&LocalStorage]/output.png', codeURL },
    { title: 'Assignment-10 [Login JS & LocalStorage]', demo: './AhmedSherif C43 Assignment 10 [Login JS & LocalStorage]/index.html', img: './AhmedSherif C43 Assignment 10 [Login JS & LocalStorage]/output.png', codeURL },
    { title: 'Assignment-11 [Weather App JS]', demo: './AhmedSherif C43 Assignment 11 [Weather App JS]/index.html', img: './AhmedSherif C43 Assignment 11 [Weather App JS]/output.png', codeURL },
    { title: 'Assignment-12 [Party Event jQuery]', demo: './AhmedSherif C43 Assignment 12 [Party Event jQuery]/index.html', img: './AhmedSherif C43 Assignment 12 [Party Event jQuery]/output.png', codeURL },
];
let examsList = [
    { title: 'Bootstrap-Exam [Daniels Template]', demo: './AhmedSherif C43 Exam 1 [Daniels]/index.html', img: './AhmedSherif C43 Exam 1 [Daniels]/output.png', codeURL },
    { title: 'JavaScript & jQuery-Exam [Yummy]', demo: './AhmedSherif C43 Exam 2 [Yummy]/index.html', img: './AhmedSherif C43 Exam 2 [Yummy]/output.png', codeURL },,
];

let assignmentsReact = [
    { title: 'START FRAMEWORK', demo: 'https://start-framework-seven-tau.vercel.app/about', img: './AhmedSherif C43 React Assignment 1 [Start FrameWork]/output.png', codeURL: "https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/e3c5bf3ea56fa53e6525215c26f451b27d332431/AhmedSherif%20C43%20React%20Assignment%201%20%5BStart%20FrameWork%5D" },
];

// ^=============== JS FUNCTIONS ===============
function display(conteniarEl, list) {
    let contant = '';
    list.forEach(element => {
        contant += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="inner position-relative ">
            <img class="img-fluid rounded  " src="${element.img}" alt="project img">
            <div
                class="content rounded  p-2 d-flex  flex-column justify-content-around align-items-center  position-absolute w-100 h-100 top-0 start-0">
                <h5 class="fs-5 text-center">${element.title}</h5>
                <div class="w-100 d-flex justify-content-between align-items-center ">
                    <a class="btn btn-custom btn-sm  mx-auto mt-2" target="_blank" href="${element.demo}"><i
                            class="fa-solid fa-link"></i>
                        demo
                    </a>
                    <a class="btn btn-custom btn-sm  mx-auto mt-2" target="_blank" href="${element.codeURL}"><i
                            class="fa-solid fa-laptop-code"></i>
                        code
                    </a>
                </div>
            </div>
        </div>
    </div>`
    });
    conteniarEl.innerHTML = contant;
}

display(routeassiContainer, assignmentsList);
display(examsContainer, examsList);
display(reactProjectsContainer, assignmentsReact);
