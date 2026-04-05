// Panic Mode - Trigger with Backslash key (\)
let panicActive = false;

document.addEventListener('keydown', function(e) {
    if (e.key === '\\' && !panicActive) {
        showFakeClassroom();
    } else if (e.key === '\\' && panicActive) {
        closePanic();
    }
});

function showFakeClassroom() {
    panicActive = true;

    const screen = document.createElement('div');
    screen.id = 'panic-screen';
    screen.style.cssText = `
        position:fixed; 
        top:0; 
        left:0; 
        width:100vw; 
        height:100vh; 
        background:#ffffff; 
        z-index:9999999; 
        font-family:Arial,sans-serif; 
        padding:30px; 
        overflow:auto;
    `;

    screen.innerHTML = `
        <div style="background:#4285f4; color:white; padding:15px 20px; font-size:22px; margin-bottom:30px;">
            Google Classroom
        </div>
        
        <h2 style="color:#333;">Your Classes</h2>
        
        <p style="font-size:18px; line-height:2.4; margin:30px 0; color:#333;">
            • Math 9 - Period 2<br>
            • Science 9 - Period 3<br>
            • English 9 - Period 4<br>
            • History 9 - Period 5
        </p>
        
        <p style="color:#666; margin-top:100px; font-size:15px;">
            This is a fake screen.<br><br>
            Press <strong>\\</strong> again to return to Homework Planet
        </p>
    `;

    document.body.appendChild(screen);
    document.body.style.display = 'none';
    document.title = "Google Classroom";
}

function closePanic() {
    const screen = document.getElementById('panic-screen');
    if (screen) screen.remove();
    document.body.style.display = '';
    document.title = "Homework Planet";
    panicActive = false;
}
