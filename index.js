function getstop(){
    document.getElementById("name1").textContent ="switched off"
    document.getElementById("offbutton").style.backgroundColor= 'red';
    document.getElementById("onbutton").style.backgroundColor= 'white';
    document.getElementById("onbutton").style.color= 'black';
    document.getElementById("bulb").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
   document.getElementById("cat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
}

function getstarted(){
    document.getElementById("name1").textContent = "switched on"
    document.getElementById("onbutton").style.backgroundColor = 'green';
    document.getElementById("offbutton").style.backgroundColor= 'white';
    document.getElementById("offbutton").style.color= 'black';
    document.getElementById("bulb").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("cat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
}
