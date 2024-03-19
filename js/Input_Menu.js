// Tabs
function openTab(evt, tabName){
    var i, tabcontent, tab;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++){
        tab[i].className = tab[i].className.replace(" active", "");;
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}

// Monitoring Sheet

let popupMS = document.getElementById("popupMS");

function openMS(){
    popupMS.classList.add("open-MS");
}

function submitMS(){
    popupMS.classList.remove("open-MS");
}

function closeMS(){
    popupMS.classList.remove("open-MS");
}

// TPR Sheet

let popupTPR = document.getElementById("popupTPR");

function openTPR(){
    popupTPR.classList.add("open-TPR");
}

function submitTPR(){
    popupTPR.classList.remove("open-TPR");
}

function closeTPR(){
    popupTPR.classList.remove("open-TPR");
}

// Fluid Input Output Sheet

let popupIO = document.getElementById("popupIO");

function openIO(){
    popupIO.classList.add("open-IO");
}

function submitIO(){
    popupIO.classList.remove("open-IO");
}

function closeIO(){
    popupIO.classList.remove("open-IO");
}

// Nurses Note Sheet

let popupNN = document.getElementById("popupNN");

function openNN(){
    popupNN.classList.add("open-NN");
}

function submitNN(){
    popupNN.classList.remove("open-NN");
}

function closeNN(){
    popupNN.classList.remove("open-NN");
}