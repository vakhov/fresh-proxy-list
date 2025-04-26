# Fresh Proxy Lists

Welcome to **Fresh Proxy List**, a repository dedicated to providing continuously updated and tested lists of proxy servers.

[![Get Fresh Proxy](https://github.com/vakhov/fresh-proxy-list/actions/workflows/update.yml/badge.svg)](https://github.com/vakhov/fresh-proxy-list/actions/workflows/update.yml)
![GitHub](https://img.shields.io/github/license/vakhov/fresh-proxy-list)
![GitHub last commit](https://img.shields.io/github/last-commit/vakhov/fresh-proxy-list)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/vakhov/fresh-proxy-list/graphs/commit-activity)

Updated at: `Sat Apr 26 02:49:45 UTC 2025`

## 🚀 Why Choose Fresh Proxy List?

- **Frequent Updates**: Stay ahead with a proxy list updated every 5-20 minutes.
- **Reliable Sources**: Only verified and functional proxies.
- **Community-Driven**: Star 🌟 this repo and join the growing community supporting open-access proxy resources.
- **Optimized for Developers**: Easily integrate with your tools and workflows.

## 🌟 Show Your Support!

If you find this project helpful:
- **Give us a star** ⭐ on GitHub.
- **Share** this repo with friends and colleagues.
- Contribute by submitting issues, feedback, or proxy sources.

## 💡 Features

- **Free Proxy List**: Access to HTTP, HTTPS, SOCKS4, and SOCKS5 proxies for various use cases.
- **Fast Proxy Servers**: Ideal for web scraping, bypassing geo-blocks, or online anonymity.
- **Geolocation Support**: Choose proxies from specific regions (coming soon).
- **API Access**: Fetch proxies programmatically with our upcoming API.
- **High Speed**: Regular tests ensure you only use the fastest proxies.

## 🛠 How to Use

Follow the instructions below to download the proxy lists.

### Download by Type

#### HTTP
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/http.txt -o http.txt
```

#### HTTPS
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/https.txt -o https.txt
```

#### SOCKS4
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/socks4.txt -o socks4.txt
```

#### SOCKS5
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/socks5.txt -o socks5.txt
```

### Download by Format

Supported formats: TXT | CSV | PHP | JSON | XML

#### Plain Text (TXT)
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/proxylist.txt -o proxylist.txt
```

#### CSV
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/proxylist.csv -o proxylist.csv
```

#### Serialized PHP Array
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/proxylist.phps -o proxylist.phps
```

#### JSON
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/proxylist.json -o proxylist.json
```

#### XML
```bash
curl -sL https://vakhov.github.io/fresh-proxy-list/proxylist.xml -o proxylist.xml
```

## Usage Examples

Below are some examples of how you can use these proxy lists in different programming languages.

### Use Cases

- **Best Proxies for Web Scraping**: Easily scrape data from multiple websites without IP bans.
- **Bypass Geo-Blocks**: Access region-locked content using geographically diverse proxies.
- **SEO Tools**: Optimize and analyze website performance from different locations.

<details>
  <summary>C# Example (using HttpClient)</summary>

```csharp
using System;
using System.IO;
using System.Net.Http;
using System.Net;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        string[] proxies = File.ReadAllLines("http.txt");
        string proxy = proxies[0];
        string[] proxyParts = proxy.Split(':');

        var httpClientHandler = new HttpClientHandler()
        {
            Proxy = new WebProxy(proxyParts[0], int.Parse(proxyParts[1])),
            UseProxy = true,
        };

        HttpClient client = new HttpClient(httpClientHandler);
        HttpResponseMessage response = await client.GetAsync("http://example.com");
        string content = await response.Content.ReadAsStringAsync();
        Console.WriteLine(content);
    }
}
```
</details>

<details>
  <summary>Go Example</summary>

```go
package main

import (
    "bufio"
    "fmt"
    "net/http"
    "net/url"
    "os"
    "strings"
)

func main() {
    file, err := os.Open("http.txt")
    if err != nil {
        panic(err)
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    scanner.Scan()
    proxyLine := scanner.Text()
    proxyURL, err := url.Parse("http://" + proxyLine)
    if err != nil {
        panic(err)
    }

    client := &http.Client{Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)}}
    resp, err := client.Get("http://example.com")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }

    fmt.Println(string(body))
}
```
</details>

<details>
  <summary>Kotlin Example</summary>

```kotlin
import java.io.BufferedReader
import java.io.File
import java.net.HttpURLConnection
import java.net.InetSocketAddress
import java.net.Proxy
import java.net.URL

fun main() {
    val proxies = File("http.txt").readLines()
    val proxyParts = proxies[0].split(":")

    val proxy = Proxy(Proxy.Type.HTTP, InetSocketAddress(proxyParts[0], proxyParts[1].toInt()))
    val url = URL("http://example.com")
    val connection = url.openConnection(proxy) as HttpURLConnection

    connection.inputStream.bufferedReader().use(BufferedReader::readText).let {
        println(it)
    }
}
```
</details>

<details>
  <summary>Swift Example (using URLSession)</summary>

```swift
import Foundation

if let proxyList = try? String(contentsOfFile: "http.txt") {
    let proxies = proxyList.components(separatedBy: "\n")
    let proxyParts = proxies[0].components(separatedBy: ":")

    let config = URLSessionConfiguration.default
    config.connectionProxyDictionary = [
        kCFNetworkProxiesHTTPEnable: true,
        kCFNetworkProxiesHTTPProxy: proxyParts[0],
        kCFNetworkProxiesHTTPPort: Int(proxyParts[1]) ?? 8080
    ] as [String : Any]

    let session = URLSession(configuration: config)
    let url = URL(string: "http://example.com")!

    let task = session.dataTask(with: url) { data, response, error in
        if let data = data, let responseString = String(data: data, encoding: .utf8) {
            print(responseString)
        }
    }
    task.resume()
}
```
</details>

<details>
  <summary>Swift Example (using Alamofire)</summary>

```swift
import Alamofire

if let proxyList = try? String(contentsOfFile: "http.txt") {
    let proxies = proxyList.components(separatedBy: "\n")
    let proxyParts = proxies[0].components(separatedBy: ":")

    let sessionManager = Session.default
    sessionManager.sessionConfiguration.connectionProxyDictionary = [
        kCFNetworkProxiesHTTPEnable: true,
        kCFNetworkProxiesHTTPProxy: proxyParts[0],
        kCFNetworkProxiesHTTPPort: Int(proxyParts[1]) ?? 8080
    ]

    sessionManager.request("http://example.com").responseString { response in
        switch response.result {
        case .success(let value):
            print(value)
        case .failure(let error):
            print(error)
        }
    }
}
```
</details>

<details>
  <summary>Python Example</summary>

```python
import requests

with open('http.txt') as file:
    proxies = file.readlines()

proxy = proxies[0].strip()
response = requests.get('http://example.com', proxies={'http': proxy})
print(response.text)
```
</details>

<details>
  <summary>JavaScript Example</summary>

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
</details>

<details>
  <summary>Bash Example</summary>

```bash
proxy=$(head -n 1 http.txt)
curl -x $proxy http://example.com
```
</details>

<details>
  <summary>PHP Example</summary>

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
</details>

<details>
  <summary>Ruby Example</summary>

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
</details>

<details>
  <summary>Java Example</summary>

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
</details>

## 📣 Stay Updated

- **Join Discussions**: Share your ideas, use cases, or challenges.
- **Follow Updates**: Keep an eye on upcoming features and enhancements.

### ⭐ Don't forget to star this repo to show your support and encourage development!

[![Star this repo](https://img.shields.io/github/stars/vakhov/fresh-proxy-list.svg?style=social)](https://github.com/vakhov/fresh-proxy-list/stargazers)

## 🏆 Contributors

We welcome contributions! Submit a pull request or suggest improvements to make this project even better.

## 📢 Spread the Word

Help us grow this project:
- Tweet about it 🐦
- Mention it in your blog posts 📚
- Recommend it on forums 📢

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

These listings are provided for informational purposes only. Please use them for viewing purposes only. I do not encourage or support anything illegal or unlawful.
