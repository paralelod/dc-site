AOS.init({
    disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
}
});
console.log('INIT - Animation on Scroll');