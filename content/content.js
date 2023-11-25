console.log("content.js loaded");
  
if(document.readyState !== 'complete') {
    window.addEventListener('load',() => {afterWindowLoaded();});
} else {
    
    afterWindowLoaded();
}

  
  function afterWindowLoaded () {
    console.log("afterWindowLoaded");
    document.addEventListener('copy', async (event) => {
        /*  DEBUG LOGS  
        console.log(event)
        console.log("content: " + event.target.textContent);
        console.log("baseURI: " + event.target.baseURI);
        */

        if(event.target.textContent == ""){
            let text = ""
            if(event.target.value == undefined){
                text = event.target.baseURI;
            }
            else{
                text = event.target.value;
            }
            let newText = replaceLink(text);
            navigator.clipboard.writeText(newText)
            return;
        }
        else{
            let text = event.target.textContent;
            let newText = replaceLink(text);
            navigator.clipboard.writeText(newText)
            return;
        }

    })
};

function replaceLink(text){
    let url = text.split("/")[2];

    let switchUrl = links[url];

    let newText = text.replace(url, switchUrl);

    return newText;
}

const links = {
    "x.com":"fixupx.com",
    "instagram.com":"ddinstagram.com",
    "www.instagram.com":"www.ddinstagram.com",
    "www.tiktok.com":"www.tiktxk.com",
    "tiktok.com":"tiktxk.com",
    "twitter.com":"vxtwitter.com",
  }
  