```raw
project_root/
├── lib/
│   └── main.dart
├── web/
│   ├── index.html              ← Flutter’s own entrypoint (leave it)
│   ├── globe/                  ← your custom HTML + scripts
│   │   ├── index.html
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   └── sw-register.js
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   └── icons/icon-192.png
│   │   └── manifest.json
├── pubspec.yaml
```