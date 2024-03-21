// Nurse Charting

// Tabs
function openTab(evt, tabName){
    var i, tabcontent, tab;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tab = document.getElementsByClassName("dashburd");
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

// Temp Line Graph
let labels_temp = ["March 16(12:20PM)", "March 16(4:20PM)", "March 16(8:20PM)", "March 16(12:20AM)"];
let itemData_temp = [36, 35, 37.4, 37];

const data_temp = {
    labels: labels_temp,
    datasets: [{
        data: itemData_temp
    }]
};

const config_temp = {
    type: "line",
    data: data_temp,
    options: {
        plugins: {
            legend:{
                display: false
            },
            title: {
                display: true,
                text: "Temperature (Celcius)"
            }
        }
    }
};

const chart_temp = new Chart (
    document.getElementById('temp_graph'),
    config_temp
)

// PR Line Graph
let labels_pr = ["March 16(12:20PM)", "March 16(4:20PM)", "March 16(8:20PM)", "March 16(12:20AM)"];
let itemData_pr = [78, 80, 81, 80];

const data_pr = {
    labels: labels_pr,
    datasets: [{
        data: itemData_pr
    }]
};

const config_pr = {
    type: "line",
    data: data_pr,
    options: {
        plugins: {
            legend:{
                display: false
            },
            title: {
                display: true,
                text: "Pulse Rate (bpm)"
            }
        }
    }
};

const chart_pr = new Chart (
    document.getElementById('pr_graph'),
    config_pr
)