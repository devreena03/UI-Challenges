var allTabs = ['home','profile','contact','blog'];
var title = {
    'home' : 'Home',
    'profile' : 'Profile',
    'contact': 'Contact Us',
    'blog': 'Blogs'
}

function tabs(tabName){

    //making tab active
    var tabs = document.getElementsByClassName("tab");
    
    for(var index=0; index<tabs.length; index++){
        tabs[index].className = tabs[index].className.replace(" active", "");
        
        if(tabName == allTabs[index]){
            tabs[index].className += " active";
        }
    }

    document.getElementById('headerId').innerText 
    = title[tabName];
    changeContent(tabName);
}

function changeContent(tabName){  
    includeFile(tabName+".html");
}

function includeFile(file){
   
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByClassName("info")[0].innerHTML = this.responseText;
          }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
}

changeContent('home');