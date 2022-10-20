const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgNames = ['pic1.jpg',
                  'pic2.jpg',
                  'pic3.jpg',
                  'pic4.jpg',
                  'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alt = {'pic1.jpg':'image of eye',
             'pic2.jpg':'image of sediment',
             'pic3.jpg':'image of flowers',
             'pic4.jpg':'image of hieroglyphics',
             'pic5.jpg':'image of butterfly'};

/* Looping through images */

for(let i = 0; i < imgNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', alt[imgNames[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', a => {
        displayedImage.src = a.target.src;
        displayedImage.alt = a.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const button = btn.getAttribute('class');
    if (button === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});