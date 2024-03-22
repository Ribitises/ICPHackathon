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