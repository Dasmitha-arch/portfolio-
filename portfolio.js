let content = document.getElementById('main');
let banner = document.getElementById('banner');
let title = document.getElementById('title')

// When the banner is clicked, hide the banner and show the main content
banner.onclick = function () {
    banner.style.display = 'none';
    content.style.display = 'flex';
     title.style.display= 'flex';// This makes the main content visible and uses flex layout
}

// When the main content is clicked, hide the main content and show the banner again
content.onclick = function () {
    title.style.display= 'none';
    banner.style.display = 'flex'; // Show the banner
    content.style.display = 'none'; // Hide the main content
}
