javascript:(async () => {
    const delay = s => new Promise(res => setTimeout(res, s * 100));
    document.querySelector("#box_layer_wrap").remove();
    document.querySelector("#box_layer_bg").remove();
    document.querySelector("body").style = "";
})();
