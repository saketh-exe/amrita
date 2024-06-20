let SideBar_year = document.querySelector(".Side_Year");
let Years = document.querySelectorAll(".Year");
let SideBar_Files = document.querySelector(".Side_Files");
let Files = document.querySelectorAll(".Files");
let SideBar_sem = document.querySelector(".Side_Sem");
let Sems = document.querySelectorAll(".Sem");
let SideBar_deprt = document.querySelector(".Side_Deprt");
let Deprts = document.querySelectorAll(".Deprt");
let SideBar_sec = document.querySelector(".Side_Sec");
let Secs = document.querySelectorAll(".Sec");
let Status_files = document.querySelector(".S_Files");
let Status_Year = document.querySelector(".S_Year");
let Status_Sem = document.querySelector(".S_Sem ");
let Status_Deprt = document.querySelector(".S_Deprt");
let Status_Section = document.querySelector(".S_Section");


let path_Array = [];
Files.forEach((element) => {
    element.addEventListener("click",e => {
        let file = element.innerHTML;
        Files.forEach((el)=>{
            el.style.display = "none";
        })
        

        Years.forEach(el => el.style.display = 'flex')
        SideBar_Files.classList.remove("active")
        SideBar_year.classList.add("active")
        path_Array[0] = file;
        Status_render()
        SideBar_render()
    })
})

Years.forEach((element) => {
    element.addEventListener("click",e => {
        let year = element.innerHTML;
        Years.forEach((el)=>{
            el.style.display = "none";
        })
       
        Sems.forEach(el => el.style.display = 'flex')
        SideBar_year.classList.remove("active")
        SideBar_sem.classList.add("active")
        path_Array[1] = year;
        Status_render()
        SideBar_render()
    })
})

Sems.forEach((element) => {
    element.addEventListener("click", (e) => {
        let sem = element.innerHTML;
        Sems.forEach((el) => {
            el.style.display = "none";
        });
        
        Deprts.forEach(el => el.style.display = 'flex')
        SideBar_sem.classList.remove("active")
        SideBar_deprt.classList.add("active")
        path_Array[2] = sem;
        Status_render()
        SideBar_render()
    });
});


Deprts.forEach((element) => {
    element.addEventListener("click", (e) => {
        let deprt = element.innerHTML;
        Deprts.forEach((el) => {
            el.style.display = "none";
        });
       
        Secs.forEach(el => el.style.display = 'flex')
        SideBar_deprt.classList.remove("active")
        SideBar_sec.classList.add("active")
        path_Array[3] = deprt;
        Status_render()
        SideBar_render()

    });
});



Secs.forEach((element) => {
    element.addEventListener("click", (e) => {
        let sec = element.innerHTML;
        Secs.forEach((el) => {
            el.style.display = "none";
        });
        
        path_Array[4] = sec;
        let Path_a = path_Array.map(text => text.trim());
        console.log(Path_a)
        Status_render()
        SideBar_render()
    });
});


function Status_render() {
    let Status = document.getElementsByClassName("Status");
    console.log(Status)
    // Hide all Status elements initially
    for (let i = 0; i < Status.length; i++) {
        Status[i].style.display = 'none';
    }

    switch (path_Array.length) {
        case 1:
            Status[0].style.display = 'flex';
            break;
        case 2:
            Status[0].style.display = 'flex';
            Status[1].style.display = 'flex';
            break;
        case 3:
            Status[0].style.display = 'flex';
            Status[1].style.display = 'flex';
            Status[2].style.display = 'flex';
            break;
        case 4:
            Status[0].style.display = 'flex';
            Status[1].style.display = 'flex';
            Status[2].style.display = 'flex';
            Status[3].style.display = 'flex';
            break;
        case 5:
            Status[0].style.display = 'flex';
            Status[1].style.display = 'flex';
            Status[2].style.display = 'flex';
            Status[3].style.display = 'flex';
            Status[4].style.display = 'flex';
            break;
        default:
            break;
    }
}

function SideBar_render() {
    // Set defaults or guard clauses to handle empty or insufficient array elements
    SideBar_Files.innerHTML = path_Array[0] || 'Files';
    SideBar_year.innerHTML = path_Array[1] || 'Year';
    SideBar_sem.innerHTML = path_Array[2] || 'Sem';
    SideBar_deprt.innerHTML = path_Array[3] || 'Deprt';
    SideBar_sec.innerHTML = path_Array[4] || 'Sec';

    switch (path_Array.length) {
        case 0:
            SideBar_Files.classList.add('active')
            SideBar_year.classList.remove('active')
            SideBar_sem.classList.remove('active')
            SideBar_deprt.classList.remove('active')
            SideBar_sec.classList.remove('active')
            break;
        case 1:
            SideBar_Files.classList.remove('active')
            SideBar_year.classList.add('active')
            SideBar_sem.classList.remove('active')
            SideBar_deprt.classList.remove('active')
            SideBar_sec.classList.remove('active')
            break;
    
        case 2:
            SideBar_Files.classList.remove('active')
            SideBar_year.classList.remove('active')
            SideBar_sem.classList.add('active')
            SideBar_deprt.classList.remove('active')
            SideBar_sec.classList.remove('active')
            break;
    
        case 3:
            SideBar_Files.classList.remove('active')
            SideBar_year.classList.remove('active')
            SideBar_sem.classList.remove('active')
            SideBar_deprt.classList.add('active')
            SideBar_sec.classList.remove('active')
            break;
    
        case 4:
            SideBar_Files.classList.remove('active')
            SideBar_year.classList.remove('active')
            SideBar_sem.classList.remove('active')
            SideBar_deprt.classList.remove('active')
            SideBar_sec.classList.add('active')
            break;
    
        case 5:
            SideBar_Files.classList.remove('active')
            SideBar_year.classList.remove('active')
            SideBar_sem.classList.remove('active')
            SideBar_deprt.classList.remove('active')
            SideBar_sec.classList.remove('active')
            break;
    
        default:
            break;
    }
    
}


function Content_remover(){

    document.querySelectorAll(".Contents").forEach(e => e.style.display = "none")
}
Status_files.addEventListener("click",()=>{
    path_Array.length = 0;
    Content_remover()
    Files.forEach( el => el.style.display = "flex");
    Status_render();
    SideBar_render()
})
Status_Year.addEventListener("click",()=>{
    path_Array.length = 1;
    Content_remover()
    Years.forEach( el => el.style.display = "flex");
    Status_render();
    SideBar_render()
})
Status_Sem.addEventListener("click",()=>{
    path_Array.length = 2;
    Content_remover()
    Sems.forEach( el => el.style.display = "flex");
    Status_render();
    SideBar_render()
})
Status_Deprt.addEventListener("click",()=>{
    path_Array.length = 3;
    Content_remover()
    Deprts.forEach( el => el.style.display = "flex");
    Status_render();
    SideBar_render()
})
Status_Section.addEventListener("click",()=>{
    path_Array.length = 4;
    Content_remover()
    Secs.forEach( el => el.style.display = "flex");
    Status_render();
    SideBar_render()
})

document.querySelector('button').addEventListener('click', () => {
    const joinedString = path_Array.map(item => item.trim()).join(')\u2192(');
    alert(joinedString);
});

