// Nav Bar
var isNavBarOpen = false;
function toggleNavBar() {
    // Variables
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (isNavBarOpen) {
        // Nav Bar
        document.getElementById("mainNavBar").style.width = "0px";
        // Nav Title
        document.getElementById("navTitle").style.marginLeft = "-200px";
        document.getElementById("navTitle").style.visibility = "hidden";
        // Nav Content
        document.getElementById("navContent").style.visibility = "hidden";
        // Nav Buttons
        document.getElementById("navBarButton").style.marginLeft = "25px";
        // Header
        document.getElementById("headerOverlay").style.marginLeft = "0px";
        document.getElementById("headerOverlay").style.width = "100%";
        // Main Content
        document.getElementById("main-div").style.marginLeft = "0";
        document.getElementById("main-div").style.width = "100%";
        // Toggle variable
        isNavBarOpen = false;
    } else {
        var openedNavContentWidth = screenWidth - 275;
        // Nav Bar
        document.getElementById("mainNavBar").style.width = "275px";
        // Nav Title
        document.getElementById("navTitle").style.visibility = "visible";
        document.getElementById("navTitle").style.marginLeft = "0";
        // Nav Content
        document.getElementById("navContent").style.visibility = "visible";
        // Nav Button
        document.getElementById("navBarButton").style.marginLeft = "300px";
        // Header
        document.getElementById("headerOverlay").style.marginLeft = "275px";
        document.getElementById("headerOverlay").style.width = openedNavContentWidth + "px";
        // Main Content
        document.getElementById("main-div").style.marginLeft = "275px";
        document.getElementById("main-div").style.width = openedNavContentWidth + "px";
        // Toggle variable
        isNavBarOpen = true;
    }
    scrollFunction();
}

// Scroll catcher
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // Small
        try{
            document.getElementById("contactButton").style.visibility = "hidden";
            document.getElementById("contactButton").style.marginTop = "50px";
            document.getElementById("reviewsButton").style.visibility = "hidden";
            document.getElementById("reviewsButton").style.marginTop = "50px";
            document.getElementById("header").style.height = "75px";
            document.getElementById("headerOverlay").style.height = "75px";
            document.getElementById("headerTitle").style.fontSize = "57px";
            document.getElementById("navBarButton").style.marginTop = "0px";
        } catch (error) {
            document.getElementById("header").style.height = "75px";
            document.getElementById("headerOverlay").style.height = "75px";
            document.getElementById("headerTitle").style.fontSize = "57px";
            document.getElementById("navBarButton").style.marginTop = "0px";
        }
    } else {
        // Big
        try {
            document.getElementById("contactButton").style.visibility = "visible";
            document.getElementById("contactButton").style.marginTop = "0";
            document.getElementById("reviewsButton").style.visibility = "visible";
            document.getElementById("reviewsButton").style.marginTop = "0";
            document.getElementById("header").style.height = "130px";
            document.getElementById("headerOverlay").style.height = "150px";
            document.getElementById("headerTitle").style.fontSize = "70px";
            document.getElementById("navBarButton").style.marginTop = "25px";
        } catch (error) {

            document.getElementById("header").style.height = "75px";
            document.getElementById("headerOverlay").style.height = "75px";
            document.getElementById("headerTitle").style.fontSize = "60px";
            document.getElementById("navBarButton").style.marginTop = "0px";
        }
        
    }
}