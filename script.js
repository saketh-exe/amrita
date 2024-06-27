let links = {};

        fetch('links.json')
            .then(response => response.json())
            .then(data => {
                links = data;
            })
            .catch(error => console.error('Error loading JSON:', error));





const sideBarYear = document.querySelector(".Side_Year");
const years = document.querySelectorAll(".Year");
const sideBarFiles = document.querySelector(".Side_Files");
const files = document.querySelectorAll(".Files");
const sideBarSem = document.querySelector(".Side_Sem");
const sems = document.querySelectorAll(".Sem");
const sideBarDept = document.querySelector(".Side_Deprt");
const depts = document.querySelectorAll(".Deprt");
const sideBarSec = document.querySelector(".Side_Sec");
const secs = document.querySelectorAll(".Sec");

const statusFiles = document.querySelector(".S_Files");
const statusYear = document.querySelector(".S_Year");
const statusSem = document.querySelector(".S_Sem");
const statusDept = document.querySelector(".S_Deprt");
const statusSection = document.querySelector(".S_Section");

let pathArray = [];

const statusElements = document.querySelectorAll(".Status");
const contentElements = document.querySelectorAll(".Contents");

function updatePathArray(index, value) {
    pathArray[index] = value.trim();
    renderStatus();
    renderSidebar();
    generateLink();  // Update the link whenever pathArray changes
}
function resetContentDisplay(elements) {
    elements.forEach(element => element.style.display = "none");
}

function renderStatus() {
    statusElements.forEach((status, index) => {
        status.style.display = index < pathArray.length ? 'flex' : 'none';
    });
}

function renderSidebar() {
    const [file, year, sem, dept, sec] = pathArray;

    if (file === 'Common Files') {
        document.querySelector(".sidebar").style.display = "none";
    } else {
        document.querySelector(".sidebar").style.display = "flex";
        sideBarFiles.innerHTML = file || 'Files';
        sideBarYear.innerHTML = year || 'Year';
        sideBarSem.innerHTML = sem || 'Sem';
        sideBarDept.innerHTML = dept || 'Dept';
        sideBarSec.innerHTML = sec || 'Sec';

        [sideBarFiles, sideBarYear, sideBarSem, sideBarDept, sideBarSec].forEach((bar, index) => {
            bar.classList.toggle('active', index === pathArray.length);
        });
    }
}
// Ensure the link is updated on every relevant interaction
files.forEach(file => {
    file.addEventListener("click", () => {
        const fileText = file.innerHTML.trim();
        resetContentDisplay(files);

        if (fileText === 'Common Files') {
            document.querySelector(".sidebar").style.display = "none";
            pathArray = [fileText];
            generateLink();
            updatePathArray(0, fileText);
        } else {
            resetContentDisplay(years);
            sideBarFiles.classList.remove("active");
            sideBarYear.classList.add("active");
            years.forEach(el => el.style.display = 'flex');
            updatePathArray(0, fileText);
        }
    });
});

years.forEach(year => {
    year.addEventListener("click", () => {
        resetContentDisplay(years);
        resetContentDisplay(sems);
        sideBarYear.classList.remove("active");
        sideBarSem.classList.add("active");
        sems.forEach(el => el.style.display = 'flex');
        updatePathArray(1, year.innerHTML);
    });
});

sems.forEach(sem => {
    sem.addEventListener("click", () => {
        resetContentDisplay(sems);
        resetContentDisplay(depts);
        sideBarSem.classList.remove("active");
        sideBarDept.classList.add("active");
        depts.forEach(el => el.style.display = 'flex');
        updatePathArray(2, sem.innerHTML);
    });
});

depts.forEach(dept => {
    dept.addEventListener("click", () => {
        resetContentDisplay(depts);
        resetContentDisplay(secs);
        sideBarDept.classList.remove("active");
        sideBarSec.classList.add("active");
        secs.forEach(el => el.style.display = 'flex');
        updatePathArray(3, dept.innerHTML);
    });
});

secs.forEach(sec => {
    sec.addEventListener("click", () => {
        resetContentDisplay(secs);
        updatePathArray(4, sec.innerHTML);
    });
});
function resetToStep(step) {
    pathArray.length = step;
    resetContentDisplay(contentElements);
    switch(step) {
        case 0:
            files.forEach(el => el.style.display = "flex");
            break;
        case 1:
            years.forEach(el => el.style.display = "flex");
            break;
        case 2:
            sems.forEach(el => el.style.display = "flex");
            break;
        case 3:
            depts.forEach(el => el.style.display = "flex");
            break;
        case 4:
            secs.forEach(el => el.style.display = "flex");
            break;
    }
    renderStatus();
    renderSidebar();
    generateLink();  // Update the link whenever pathArray changes
}

statusFiles.addEventListener("click", () => resetToStep(0));
statusYear.addEventListener("click", () => resetToStep(1));
statusSem.addEventListener("click", () => resetToStep(2));
statusDept.addEventListener("click", () => resetToStep(3));
statusSection.addEventListener("click", () => resetToStep(4));

document.querySelector('button').addEventListener('click', () => {
    const joinedString = pathArray.map(item => item.trim()).join(')\u2192(');
    alert(joinedString);
});
const selectedLinkContainer = document.getElementById("selected-link");

function generateLink() {
    if (pathArray.length === 1 && pathArray[0] === "Common Files") {
        const linkArray = links["Common Files"];
        selectedLinkContainer.innerHTML = linkArray.map(linkObj => {
            const [key, link] = Object.entries(linkObj)[0];
            return `<a href="${link}" target="_blank">${key}</a>`;
        }).join('<br>');
    } else if (pathArray[0] === "Academic Files" && pathArray.length === 5) {
        
        const key = pathArray.slice(0, 5).join('_'); // Assuming pathArray[1] and pathArray[2] are years and semester
       
   
        if (links[key]) {
            const linkArray = links[key];
           
            selectedLinkContainer.innerHTML = linkArray.map(linkObj => {
                const [key, link] = Object.entries(linkObj)[0];
            return `<a href="${link}" target="_blank">${key}</a>`;
            }).join('<br>');
        } else {
            selectedLinkContainer.innerHTML = "No links available";
        }
    } 
    else if(pathArray.length === 5){
        const key = pathArray.map(item => item.trim()).join('_');
        const linkArray = links[key];
        selectedLinkContainer.innerHTML = linkArray ? linkArray.map(link => `<a href="${link}" target="_blank">File</a>`).join('<br>') : "No link available";
    }
    else {
        selectedLinkContainer.innerHTML = "";  // Clear the container if not all selections are made
    }
}


