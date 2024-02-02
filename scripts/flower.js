function createElementRandom() {
    let container = document.getElementById('container');
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let count = 80;

    for (let i = 0; i < count; i++) {
        let randomLeft = Math.floor(Math.random() * width);
        let randomTop = Math.floor(Math.random() * height);
        let widthElement = Math.floor(Math.random() * 50) + 2;
        let timeAnimation = Math.floor(Math.random() * 8) + 5;

        let div = document.createElement("div");
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.animation = 'moveS ' + timeAnimation + 's ease-in infinite';

        let img = document.createElement("img");
        img.src = '../assets/images/hoa.png';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        div.appendChild(img);
        container.appendChild(div);
    }
}
createElementRandom();
