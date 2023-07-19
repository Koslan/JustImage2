window.onload = function() {
    var imageContainer = document.getElementById('imageContainer');

    var img = document.createElement('img');
    img.src = './videoTemplate.jpg'; // replace with your image file name
    img.alt = 'Image';
    img.width = 500; // change size as needed

    imageContainer.appendChild(img);
};
