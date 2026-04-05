// PANIC MODE - Fake Google Sign In → Password → Google Classroom
let panicActive = false;

document.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault();

        if (panicActive) {
            closePanic();
        } else {
            startPanic();
        }
    }
});

function startPanic() {
    panicActive = true;

    const html = `
        <div id="panic-screen" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:#f8f9fa; z-index:9999999; font-family:Arial,sans-serif; margin:0; padding:0; overflow:auto;">
            
            <!-- Email Screen -->
            <div style="max-width:460px; margin:120px auto 0; background:#fff; border-radius:8px; box-shadow:0 2px 15px rgba(0,0,0,0.15); padding:40px 40px 36px;">
                <div style="text-align:center;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" style="height:72px;">
                    <h1 style="font-size:28px; font-weight:400; margin:24px 0 8px; color:#202124;">Sign in</h1>
                    <p style="color:#202124; font-size:16px;">Use your Google Account</p>
                </div>

                <input type="text" id="fake-email" placeholder="Email or phone" 
                       style="width:100%; height:56px; padding:0 16px; margin:24px 0; font-size:16px; border:1px solid #dadce0; border-radius:4px; outline:none;">

                <button onclick="goToPassword()" 
                        style="width:100%; height:48px; background:#1a73e8; color:white; border:none; border-radius:4px; font-size:15px; font-weight:500; cursor:pointer;">
                    Next
                </button>
            </div>

            <div style="text-align:center; margin-top:50px; color:#666; font-size:14px;">
                Press <strong>Shift + Tab</strong> to return to Homework Planet
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    document.body.style.display = 'none';
    document.title = "Sign in - Google Accounts";

    setTimeout(() => {
        document.getElementById('fake-email').focus();
    }, 50);
}

window.goToPassword = function() {
    const emailInput = document.getElementById('fake-email').value.trim();
    const screen = document.getElementById('panic-screen');

    screen.innerHTML = `
        <div style="max-width:460px; margin:120px auto 0; background:#fff; border-radius:8px; box-shadow:0 2px 15px rgba(0,0,0,0.15); padding:40px 40px 36px;">
            <div style="text-align:center;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" style="height:72px;">
                <h1 style="font-size:24px; font-weight:400; margin:20px 0 8px; color:#202124;">Welcome</h1>
                <p style="color:#202124; font-size:15px;">${emailInput || 'test@gmail.com'}</p>
            </div>

            <input type="password" id="fake-password" placeholder="Password" 
                   style="width:100%; height:56px; padding:0 16px; margin:24px 0; font-size:16px; border:1px solid #dadce0; border-radius:4px; outline:none;">

            <button onclick="showClassroom()" 
                    style="width:100%; height:48px; background:#1a73e8; color:white; border:none; border-radius:4px; font-size:15px; font-weight:500; cursor:pointer;">
                Sign in
            </button>
        </div>

        <div style="text-align:center; margin-top:50px; color:#666; font-size:14px;">
            Press <strong>Shift + Tab</strong> to return to Homework Planet
        </div>
    `;

    document.title = "Password - Google Accounts";
};

window.showClassroom = function() {
    const screen = document.getElementById('panic-screen');
    document.title = "Google Classroom";

    screen.innerHTML = `
        <div style="background:#4285f4; color:white; padding:16px 24px; font-size:22px; display:flex; align-items:center; gap:12px;">
            <img src="https://ssl.gstatic.com/classroom/favicon.ico" style="height:32px;">
            Google Classroom
        </div>
        <div style="padding:30px; color:#333;">
            <h2 style="margin-bottom:20px;">Your Classes</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
                <div style="background:#f1f3f4; padding:16px; border-radius:8px;">
                    <h3 style="margin:0 0 6px 0; color:#1a73e8;">Math 9 • Period 2</h3>
                    <p style="margin:0; color:#555; font-size:14px;">Mrs. Thompson • Quiz tomorrow</p>
                </div>
                <div style="background:#f1f3f4; padding:16px; border-radius:8px;">
                    <h3 style="margin:0 0 6px 0; color:#1a73e8;">Science 9 • Period 3</h3>
                    <p style="margin:0; color:#555; font-size:14px;">Mr. Patel • Lab due Friday</p>
                </div>
                <div style="background:#f1f3f4; padding:16px; border-radius:8px;">
                    <h3 style="margin:0 0 6px 0; color:#1a73e8;">English 9 • Period 4</h3>
                    <p style="margin:0; color:#555; font-size:14px;">Ms. Rivera • Essay due today</p>
                </div>
            </div>
        </div>

        <div style="text-align:center; margin-top:40px; color:#666; font-size:14px;">
            Press <strong>Shift + Tab</strong> to return to Homework Planet
        </div>
    `;
};

function closePanic() {
    const screen = document.getElementById('panic-screen');
    if (screen) screen.remove();
    document.body.style.display = '';
    document.title = "Homework Planet - Test";
    panicActive = false;
}
