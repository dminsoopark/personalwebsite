var rotate = document.getElementById(`logo`);

rotate.addEventListener('mouseover', function() {
    this.className = 'rotate over';
}, false);

rotate.addEventListener('mouseout', function() {
    this.className = 'rotate';
}, false);