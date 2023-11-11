var app = angular.module('freshproxy', []);

app.controller('proxyTableCtrl', function ($scope, $http) {

    $scope.data = [];
    $scope.search = {};
    $scope.title = "Loading...";

    $http.get('proxylist.json').then((response) => {
        json = response.data;
        json.forEach(proxy => {
            switch (proxy.anon) {
                case "1":
                    proxy.anon_verbose = "No anonymity";
                    break;
                case "2":
                    proxy.anon_verbose = "Low anonymity";
                    break;
                case "3":
                    proxy.anon_verbose = "Average anonymity";
                    break;
                case "4":
                    proxy.anon_verbose = "High anonymity";
                    break;
            }
            proxy.type = "";

            if (proxy.http === "1")
                proxy.type = "http";
            if (proxy.ssl === "1")
                proxy.type = proxy.type.concat(" https");
            if (proxy.socks4 === "1")
                proxy.type = proxy.type.concat(" socks4");
            if (proxy.socks5 === "1")
                proxy.type = proxy.type.concat(" socks5");

            $scope.data.push(proxy);
        });
        $scope.title = "Proxies";
    })
});