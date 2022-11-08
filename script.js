var rotate = document.getElementById(`logo`);

logo.addEventListener('moouseover', function() {
    this.className = 'logo over';
}, false);

logo.addEventListener('mouseout', function() {
    this.className = 'logo';
}, false);