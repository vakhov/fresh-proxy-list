var app = angular.module('freshproxy', []);

app.controller('proxyTableCtrl', function ($scope, $http) {

    $scope.data = [];
    $scope.search = {};
    $scope.title = "Loading...";

    const cacheKey = "proxyData";
    const cacheTimestampKey = "proxyDataTimestamp";
    const updateInterval = 10 * 60 * 1000; // 10 минут

    const cachedData = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    function mapAnonymityLevel(level) {
        switch (level) {
            case "1":
                return "No anonymity";
            case "2":
                return "Low anonymity";
            case "3":
                return "Average anonymity";
            case "4":
                return "High anonymity";
            default:
                return "Unknown";
        }
    }

    if (cachedData && cachedTimestamp && Date.now() - cachedTimestamp < updateInterval) {
        $scope.data = JSON.parse(cachedData);
        $scope.title = "Proxies";
    } else {
        $http.get('proxylist.json').then((response) => {
            const json = response.data.map(proxy => ({
                ...proxy,
                anon_verbose: mapAnonymityLevel(proxy.anon),
                type: [
                    proxy.http === "1" && "http",
                    proxy.ssl === "1" && "https",
                    proxy.socks4 === "1" && "socks4",
                    proxy.socks5 === "1" && "socks5"
                ].filter(Boolean).join(" ")
            }));

            $scope.data = json;
            $scope.title = "Proxies";

            localStorage.setItem(cacheKey, JSON.stringify(json));
            localStorage.setItem(cacheTimestampKey, Date.now());
        });
    }

    $scope.clearCache = function () {
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimestampKey);
        location.reload();
    };

    setInterval(() => {
        const cachedTimestamp = localStorage.getItem(cacheTimestampKey);
        if (!cachedTimestamp || Date.now() - cachedTimestamp >= updateInterval) {
            localStorage.removeItem(cacheKey);
            localStorage.removeItem(cacheTimestampKey);
            location.reload();
        }
    }, updateInterval);
});
