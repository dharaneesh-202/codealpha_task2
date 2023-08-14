function generateCaptcha() {
    const captchaLength = 6;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
  
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars[randomIndex];
    }
    
    return captcha;
  }
  function initCaptcha() {
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
  
    const captcha = generateCaptcha();
    captchaText.textContent = captcha;
    captchaInput.value = '';
  }
  function validateCaptcha(event) {
    event.preventDefault();
  
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
  
    if (captchaText.textContent === captchaInput.value) {
      alert('CAPTCHA successfully validated!'); 
      initCaptcha(); 
    } else {
      alreat('Invalid CAPTCHA, please try again.'); 
      initCaptcha(); 
    }
  }
  initCaptcha();
  