console.log("content.js loaded");
  
if(document.readyState !== 'complete') {
    window.addEventListener('load',() => {console.log("window loaded");afterWindowLoaded();});
} else {
    afterWindowLoaded();
}

  
  function afterWindowLoaded () {
    document.addEventListener('copy', async (event) => {
        console.log(event.target.textContent);
        let text = event.target.textContent;


        let url = text.split("/")[2];

        let switchUrl = links[url];

        let newText = text.replace(url, switchUrl);

        navigator.clipboard.writeText(newText)
    })
};

const links = {
    "x.com":"fixupx.com",
    "instagram.com":"ddinstagram.com"
  }
  