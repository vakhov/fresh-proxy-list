# Fresh Proxy Lists

List of fresh, working proxies (HTTP, HTTPS, SOCKS4 & SOCKS5) servers.

[![Get Fresh Proxy](https://github.com/vakhov/fresh-proxy-list/actions/workflows/update.yml/badge.svg)](https://github.com/vakhov/fresh-proxy-list/actions/workflows/update.yml)
![GitHub](https://img.shields.io/github/license/vakhov/fresh-proxy-list)
![GitHub last commit](https://img.shields.io/github/last-commit/vakhov/fresh-proxy-list)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/vakhov/fresh-proxy-list/graphs/commit-activity)

Updated at: `Mon Aug 12 19:25:56 UTC 2024`

## Overview

Fresh Proxy Lists provides an up-to-date list of proxies across multiple formats and types. This repository is perfect for developers and security enthusiasts looking for reliable proxy lists.

## Features

- **Regular Updates**: Updated automatically every day to ensure fresh and working proxies.
- **Multiple Formats**: Available in TXT, CSV, PHP, JSON, and XML.
- **Various Types**: Includes HTTP, HTTPS, SOCKS4, and SOCKS5 proxies.

## Getting Started

Follow the instructions below to download the proxy lists.

### Download by Type

#### HTTP
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/http.txt -o http.txt
```

#### HTTPS
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/https.txt -o https.txt
```

#### SOCKS4
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/socks4.txt -o socks4.txt
```

#### SOCKS5
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/socks5.txt -o socks5.txt
```

### Download by Format

Supported formats: TXT | CSV | PHP | JSON | XML

#### Plain Text (TXT)
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/proxylist.txt -o proxylist.txt
```

#### CSV
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/proxylist.csv -o proxylist.csv
```

#### Serialized PHP Array
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/proxylist.phps -o proxylist.phps
```

#### JSON
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/proxylist.json -o proxylist.json
```

#### XML
```bash
curl -s -L https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/proxylist.xml -o proxylist.xml
```

## Usage Examples

Below are some examples of how you can use these proxy lists in different programming languages.


### Python Example
```python
import requests

with open('http.txt') as file:
    proxies = file.readlines()

proxy = proxies[0].strip()
response = requests.get('http://example.com', proxies={'http': proxy})
print(response.text)
```

### JavaScript Example
```javascript
const axios = require('axios');
const fs = require('fs');

fs.readFile('http.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const proxies = data.split('\n');
    const proxy = proxies[0];

    axios.get('http://example.com', {
        proxy: {
            host: proxy.split(':')[0],
            port: proxy.split(':')[1]
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
});
```

### Bash Example
```bash
proxy=$(head -n 1 http.txt)
curl -x $proxy http://example.com
```

### PHP Example
```php
<?php
$proxies = file('http.txt', FILE_IGNORE_NEW_LINES);
$proxy = $proxies[0];

$context = stream_context_create([
    'http' => [
        'proxy' => 'tcp://' . $proxy,
        'request_fulluri' => true,
    ],
]);

$response = file_get_contents('http://example.com', false, $context);
echo $response;
?>
```

### Ruby Example
```ruby
require 'net/http'

proxies = File.readlines('http.txt')
proxy = proxies[0].strip.split(':')

uri = URI('http://example.com')
Net::HTTP.start(uri.host, uri.port, proxy[0], proxy[1].to_i) do |http|
  request = Net::HTTP::Get.new uri
  response = http.request request
  puts response.body
end
```

### Java Example
```java
import java.io.*;
import java.net.*;

public class ProxyExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("http.txt"));
        String proxyLine = reader.readLine();
        reader.close();
        
        String[] proxyParts = proxyLine.split(":");
        String proxyHost = proxyParts[0];
        int proxyPort = Integer.parseInt(proxyParts[1]);

        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(proxyHost, proxyPort));
        URL url = new URL("http://example.com");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();

        System.out.println(content.toString());
    }
}
```

## Contributing

We welcome contributions from the community! If you have any suggestions, bug reports, or pull requests, please feel free to submit them.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

These listings are provided for informational purposes only. Please use them for viewing purposes only. I do not encourage or support anything illegal or unlawful.
