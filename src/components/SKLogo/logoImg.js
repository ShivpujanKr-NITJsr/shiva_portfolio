const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
  <!-- Define a radial gradient for the 3D effect -->
  <defs>
    <radialGradient id="gradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#922; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#555; stop-opacity:1" />
    </radialGradient>

    <!-- Define a filter for the text shadow -->
    <filter id="textShadow" x="0" y="0" width="150%" height="150%">
      <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>

  <!-- Create the text element with 3D effects -->
  <text x="50%" y="84%" font-family="Arial" font-size="80" fill="url(#gradient)" filter="url(#textShadow)" text-anchor="middle">
    SK
  </text>
</svg>`

  // Convert the SVG code to a data URL
  export const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;