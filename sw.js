// ===== 拼图大师 - Service Worker =====
const CACHE_NAME = 'puzzle-master-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './game.js',
    './manifest.json',
];

// 安装 - 缓存核心资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// 激活 - 清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// 请求 - 缓存优先，网络回退
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request).then(response => {
                // 缓存新请求（图片等）
                if (response.status === 200 && event.request.url.includes('picsum.photos')) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            });
        }).catch(() => {
            // 离线回退
            if (event.request.destination === 'document') {
                return caches.match('./index.html');
            }
        })
    );
});