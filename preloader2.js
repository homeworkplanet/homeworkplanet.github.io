// preloader2.js - Skip button in bottom right + scroll to top when done

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

        <div class="hacker-text">SHOWING ALL GAMES 😤</div>

        <!-- Skip Button - Bottom Right -->
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

    // Animation keyframes
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
            text-shadow: 
                0 0 10px #00ff9d,
                0 0 20px #00ff9d,
                0 0 40px #00ff41;
            animation: hackerGlow 1.5s ease 1s forwards,
                       scanline 4s linear infinite;
            opacity: 0;
        }

        @keyframes hackerGlow {
            to { opacity: 1; }
        }

        @keyframes scanline {
            0%   { text-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d; }
            50%  { text-shadow: 0 0 20px #00ff9d, 0 0 40px #00ff41; }
            100% { text-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d; }
        }

        #skip-preloader:hover {
            background: rgba(255,255,255,0.7);
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);

    // Function to scroll to top when preloader is done
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }

    function closePreloader() {
        // Fade into matching dark color instead of white
        preloader.style.background = 'linear-gradient(rgba(15,18,32,0.98), rgba(15,18,32,0.98))';
        preloader.style.opacity = '0';
        
        setTimeout(() => {
            preloader.remove();
            scrollToTop();
        }, 1200);
    }

    // Skip button
    const skipBtn = document.getElementById('skip-preloader');
    skipBtn.addEventListener('click', closePreloader);

    // Auto finish after 2.8 seconds
    setTimeout(() => {
        closePreloader();
    }, 2800);
}

// Run only on fresh load
showPreloader();

// ==================== AD SCRIPTS (Hidden) ====================
const adContainer = document.createElement('div');
adContainer.style.display = 'none';
adContainer.innerHTML = `
  <script>
    atOptions = {
      'key' : '69fabbaaeb7265118a19b1b3c0daeb4a',
      'format' : 'iframe',
      'height' : 300,
      'width' : 160,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/69fabbaaeb7265118a19b1b3c0daeb4a/invoke.js"></script>

  <script>
    atOptions = {
      'key' : 'cedfa4bcd32915ec8bb77c05d0a71c7f',
      'format' : 'iframe',
      'height' : 60,
      'width' : 468,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/cedfa4bcd32915ec8bb77c05d0a71c7f/invoke.js"></script>

  <script>
    atOptions = {
      'key' : '723161d618be2ad7b86fdba6a918c1b0',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/723161d618be2ad7b86fdba6a918c1b0/invoke.js"></script>

  <script>
    atOptions = {
      'key' : '4732dffd9c312c7ca2be94254e316f88',
      'format' : 'iframe',
      'height' : 600,
      'width' : 160,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/4732dffd9c312c7ca2be94254e316f88/invoke.js"></script>

  <script>
    atOptions = {
      'key' : 'b5b85d61b9a052010732a076a5ad6e7c',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/b5b85d61b9a052010732a076a5ad6e7c/invoke.js"></script>

  <script>
    atOptions = {
      'key' : 'fab9999e2eb116da8531a1fd7aa81231',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/fab9999e2eb116da8531a1fd7aa81231/invoke.js"></script>
`;
document.body.appendChild(adContainer);
