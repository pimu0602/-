// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロールの設定
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // ヘッダーの高さ分を考慮
                    behavior: 'smooth'
                });
                
                // URLを更新（履歴に追加）
                history.pushState(null, '', targetId);
            }
        });
    });
    
    // お問い合わせフォームの送信処理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータを取得
            const formData = new FormData(contactForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // ここでフォームの送信処理を実装（例: fetch APIを使用したサーバーへの送信）
            console.log('フォーム送信:', formDataObj);
            
            // 送信完了メッセージを表示
            alert('お問い合わせありがとうございます。\n後ほど担当者よりご連絡いたします。');
            
            // フォームをリセット
            contactForm.reset();
        });
    }
    
    // ヘッダーのスクロールエフェクト
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundPositionY = window.scrollY * 0.5 + 'px';
            }
        });
    }
    
    // カウントダウンタイマー
    function updateCountdown() {
        const eventDate = new Date('2025-08-08T19:30:00+09:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // 日、時間、分、秒を計算
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // カウントダウン要素が存在する場合に更新
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">日</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">時間</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">分</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">秒</span>
                </div>
            `;
        }
    }
    
    // カウントダウンを1秒ごとに更新
    setInterval(updateCountdown, 1000);
    updateCountdown(); // 初期表示
});
