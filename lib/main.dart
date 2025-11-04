import 'package:flutter/material.dart';
import 'dart:ui_web' as ui_web;
import 'dart:html' as html;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mutnik Adventures',
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
      ),
      home: const MultiPageWebView(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MultiPageWebView extends StatefulWidget {
  const MultiPageWebView({Key? key}) : super(key: key);

  @override
  State<MultiPageWebView> createState() => _MultiPageWebViewState();
}

class _MultiPageWebViewState extends State<MultiPageWebView> {
  final String viewId = 'webview-${DateTime.now().millisecondsSinceEpoch}';
  int _currentIndex = 0;
  late html.IFrameElement _iframe;

  // Map indexes to page URLs
  final List<String> _pages = [
    'globe/index.html',   // 🌍 Globe
    'globe/gallery.html', // 🖼️ Gallery
    'globe/about.html',   // ℹ️ About
  ];

  @override
  void initState() {
    super.initState();
    _iframe = html.IFrameElement()
      ..style.border = 'none'
      ..style.height = '100%'
      ..style.width = '100%'
      ..src = _pages[_currentIndex];

    ui_web.platformViewRegistry.registerViewFactory(viewId, (int _) => _iframe);
  }

  void _onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
      _iframe.src = _pages[index];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: HtmlElementView(viewType: viewId),
      bottomNavigationBar: _currentIndex == 1
          ? null // hide bottom nav when gallery is selected
          : BottomNavigationBar(
              currentIndex: _currentIndex,
              onTap: _onTabTapped,
              selectedItemColor: Theme.of(context).colorScheme.primary,
              unselectedItemColor: Colors.grey,
              showSelectedLabels: true,
              showUnselectedLabels: true,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.public), label: 'Globe'),
                BottomNavigationBarItem(icon: Icon(Icons.photo_album), label: 'Gallery'),
                BottomNavigationBarItem(icon: Icon(Icons.info_outline), label: 'About'),
              ],
            ),
    );
  }
}
