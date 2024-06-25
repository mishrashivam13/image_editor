document.getElementById('upload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('photo').src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
});

const photo = document.getElementById('photo');
const controls = document.querySelectorAll('.controls input[type="range"]');

controls.forEach(control => {
    control.addEventListener('input', updateImage);
});

function updateImage() {
    const grayscale = document.getElementById('grayscale').value;
    const brightness = document.getElementById('brightness').value;
    const contrast = document.getElementById('contrast').value;
    const rotate = document.getElementById('rotate').value;
    const sepia = document.getElementById('sepia').value;
    const invert = document.getElementById('invert').value;
    const saturate = document.getElementById('saturate').value;
    const blur = document.getElementById('blur').value;

    photo.style.filter = `
        grayscale(${grayscale}%)
        brightness(${brightness}%)
        contrast(${contrast}%)
        sepia(${sepia}%)
        invert(${invert}%)
        saturate(${saturate}%)
        blur(${blur}px)
    `;
    photo.style.transform = `rotate(${rotate}deg)`;
}

document.getElementById('submit').addEventListener('click', function () {
    alert('Image submitted with current settings!');
    // Add further actions to handle the submitted image here.
});
