function loadImg1(inputbx) {
    var file = inputbx.files[0];
    var img = document.getElementById('photo1');
    var photoDes = document.getElementById('phototext');
    var reader = new FileReader();
    reader.onloadend = function () {
        img.src = reader.result;
    }
    reader.readAsDataURL(file);
    img.setAttribute('style', 'visibility: visible;');
    photoDes.innerHTML = 'change/update';

}

function loadImg2(thumbimpression) {
    var file = thumbimpression.files[0];
    var img = document.getElementById('photo2');
    var photoDes2 = document.getElementById('phototext2');
    var reader = new FileReader();
    reader.onloadend = function () {
        img.src = reader.result;
    }
    reader.readAsDataURL(file);
    img.setAttribute('style', 'visibility:visible;')
    photoDes2.innerHTML = 'change thumbimpression';
}

function loadImg3(signature) {
    var file = signature.files[0];
    var img = document.getElementById('photo3');
    var photoDes3 = document.getElementById('phototext3');
    var reader = new FileReader();
    reader.onloadend = function () {
        img.src = reader.result;
    }
    reader.readAsDataURL(file);
    img.setAttribute('style', 'visibility:visible;')
    photoDes3.innerHTML = 'change signature';
}
