function showPreloader() {
    // Skip if coming back via back button or panic mode
    if (performance.navigation.type === 2 ||
        performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
        return;
    }
    const preloader = document.createElement('div');
    preloader.id = 'homework-preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: linear-gradient(rgba(15,18,32,0.95), rgba(15,18,32,0.95)),
                    url("https://wallpapers.com/images/hd/dark-blue-aesthetic-calm-lake-oprig3tpij9dxsic.jpg");
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        flex-direction: column;
        opacity: 1;
        transition: opacity 1.2s ease;
    `;
    preloader.innerHTML = `
        <img src="https://i.imgur.com/QXhoS1t.png"
             alt="Homework Planet"
             style="width: 540px; margin-bottom: 40px;
                    opacity: 0; transform: translateY(-150px);
                    animation: dropLogo 1.6s ease forwards;">
        <div class="hacker-text">THE BEST UNBLOCKED GAMES</div>
       
        <div id="enter-site" class="enter-btn">CLICK TO ENTER</div>
        <button id="skip-preloader"
                style="position: absolute;
                       bottom: 40px;
                       right: 40px;
                       background: rgba(255,255,255,0.5);
                       color: white;
                       border: none;
                       padding: 10px 24px;
                       border-radius: 9999px;
                       font-size: 14px;
                       font-weight: 600;
                       cursor: pointer;
                       backdrop-filter: blur(8px);
                       transition: all 0.3s ease;
                       box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            SKIP
        </button>
    `;
    document.body.appendChild(preloader);
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes dropLogo {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .hacker-text {
            font-family: 'Courier New', monospace;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 4px;
            color: #00ff9d;
            text-transform: uppercase;
            text-shadow: 0 0 10px #00ff9d;
            animation: hackerGlow 1.5s ease 1s forwards;
            opacity: 0;
            margin-bottom: 20px;
        }
        /* Styling for the new Enter button */
        .enter-btn {
            font-family: 'Courier New', monospace;
            font-size: 20px;
            color: white;
            cursor: pointer;
            opacity: 0;
            margin-top: 30px;
            padding: 10px 20px;
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.3s ease;
            animation: fadeInEnter 1s ease 2.5s forwards; /* Appears after logo/text */
        }
        .enter-btn:hover {
            background: rgba(255,255,255,0.1);
            letter-spacing: 2px;
            color: #00ff9d;
            border-color: #00ff9d;
        }
        @keyframes hackerGlow {
            to { opacity: 1; }
        }
        @keyframes fadeInEnter {
            to { opacity: 1; }
        }
        #skip-preloader:hover {
            background: rgba(255,255,255,0.7);
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
    function closePreloader() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 1200);
    }
    // Event listeners for both the Skip button and the Enter text
    document.getElementById('skip-preloader').addEventListener('click', closePreloader);
    document.getElementById('enter-site').addEventListener('click', closePreloader);

    // Auto refresh after 0.65 seconds so main screen buttons work again
    setTimeout(() => {
        location.reload();
    }, 650);
}

showPreloader();
