let video = document.querySelector('video');

let select = document.querySelector('select');

select.addEventListener('change', () => {
    video.playbackRate = parseFloat(select.value);
});