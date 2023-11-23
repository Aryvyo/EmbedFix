console.log("content.js loaded");
  
if(document.readyState !== 'complete') {
    console.log("window not loaded");
    window.addEventListener('load',() => {console.log("window loaded");afterWindowLoaded();});
} else {
    console.log("window loaded");
    afterWindowLoaded();
}

function isXShareButton(element) {
    return (
      element &&
      element.tagName.toLowerCase() === 'div' &&
      element.classList.contains('css-175oi2r r-1loqt21 r-18u37iz r-ymttw5 r-1f1sjgu r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l')

    );
  }
  
  function afterWindowLoaded () {
    console.log("after window loaded");
    document.addEventListener('copy', (event) => {
        console.log(event.target.textContent);
        newUrl = event.target.textContent.replace("x.com", "fixupx.com");
        console.log(newUrl);
        navigator.clipboard.writeText(newUrl);

    })
    console.log("after listener added loaded");
};

