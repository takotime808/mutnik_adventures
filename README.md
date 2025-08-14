<!-- Copyright (c) 2025 takotime808 -->
# Mutnik Adventures #

[![Demo](https://img.shields.io/badge/demo-live-blue)](https://takotime808.github.io/mutnik_adventures/)

This is a simple website showing a world map with travel pins. Clicking on a pin opens a small gallery for that location.

<!-- ## Requirements

```python
pip install pillow
``` -->

## Development ##

### Deployed to GitHub Pages ###

[https://takotime808.github.io/mutnik_adventures/](https://takotime808.github.io/mutnik_adventures/)

### Local Deployments ###
Open `index.html` in your browser. The map is powered by [Leaflet](https://leafletjs.com/) and uses local placeholder images so it works offline.

## Install as a Progressive Web App

### Android
1. Serve the project locally (for example, run `npx serve` and open the provided URL).
2. Open the site in Chrome and wait for it to finish loading.
3. Use the browser menu and choose **Add to Home screen**.
4. Launch the installed app from your home screen.

### iOS
1. Open the site in Safari.
2. Tap the **Share** button and select **Add to Home Screen**.
3. The app icon will appear on your home screen and run full-screen when opened.

### Docker Build PWS
```
docker build -t npm:npx-serve .
docker run --rm -p 8080:8080
```
Then go to [http://localhost:8080/](http://localhost:8080/) and click the button on the right-side of the URL bar.