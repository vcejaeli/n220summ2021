// var everything = document.getElementById('everything');

// TweenMax.fromTo(everything, 1, {opacity:0, y:50},
// {opacity: 1, y:0});

let everything = document.getElementById("everything");

function textFocus() {
    resetAnimation(everything);
    everything.classList.remove("deselected");
    everything.classList.add("selected");
}
function textLeave() {
    resetAnimation(everything);
    everything.classList.remove("selected");
    everything.classList.add("deselected");
}

function resetAnimation(el) {
    el.style.animation = 'none';
    // el.offsetHeight;
    el.style.animation = null;
}

//delete below in case it dont work - failed attempt
// $('#pinkClick').click(function() {
//     $('.pinkRect').toggleClass('pinkRect-active');
// });