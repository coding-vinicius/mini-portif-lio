
const tabs = document.querySelectorAll(".tab");


tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return;
        }

        tabSelect(tab)
        displayTabInfos(tab)
    });
});

function tabSelect(tab) {
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected")

    tab.classList.add("selected");

}

function displayTabInfos(tab) {
    const selectedInfo = document.querySelector(".info.selected");
    selectedInfo.classList.remove("selected");

    const idElementInfos = `info-${tab.id}`

    const infoToDisplay = document.getElementById(idElementInfos);
    infoToDisplay.classList.add("selected");
}