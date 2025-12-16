// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTabs();
    initScrollAnimation();
    initSmoothScroll();
});

/**
 * 네비게이션 활성화 관리
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer로 현재 보이는 섹션 감지
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 네비게이션 링크 클릭 이벤트
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 경력 탭 전환 기능
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCompany = this.getAttribute('data-company');
            
            // 모든 탭 버튼과 콘텐츠에서 active 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 클릭한 탭과 해당 콘텐츠에 active 추가
            this.classList.add('active');
            const targetContent = document.getElementById(targetCompany);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/**
 * 스크롤 애니메이션 초기화
 */
function initScrollAnimation() {
    const elements = document.querySelectorAll('.section, .about-content, .experience-container');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

/**
 * 부드러운 스크롤
 */
function initSmoothScroll() {
    // CSS scroll-behavior: smooth 대신 JavaScript로 구현하여 더 부드럽게
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 모바일 메뉴 토글 (필요시 추가)
 */
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuButton && sidebar) {
        mobileMenuButton.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

/**
 * 타이핑 효과 (Hero 섹션용, 선택사항)
 */
function initTypingEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                heroName.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        // 스크롤이 Hero 섹션에 도달하면 시작
        const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                type();
                observer.disconnect();
            }
        });
        
        observer.observe(heroName);
    }
}

/**
 * 스크롤 위치에 따른 헤더 효과
 */
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 스크롤 방향에 따른 효과 추가 가능
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 스크롤 다운
    } else {
        // 스크롤 업
    }
    
    lastScrollTop = scrollTop;
});

/**
 * 이미지 로드 시 애니메이션 (이미지 추가 시 사용)
 */
function initImageAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
}