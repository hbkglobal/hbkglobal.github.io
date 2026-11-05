// Service worker tối thiểu để điện thoại cho phép cài app. Không lưu dữ liệu.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
