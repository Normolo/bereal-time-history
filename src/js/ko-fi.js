//
//	ko-fi.js
//	BeReal Time History
//
//	Created by Devin Baeten on 2023-03-03.
//

// Define the URL for the Ko-fi script
const koFiScriptUrl = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';

// Create a new script element
const script = document.createElement('script');

// Set the source URL for the script
script.src = koFiScriptUrl;

// Add the script to the HTML <body> section to load the Ko-fi widget
document.body.appendChild(script);

// Once the script is loaded, draw the Ko-fi widget
script.onload = function () {
  kofiWidgetOverlay.draw('devinbaeten', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#d9534f',
    'floating-chat.donateButton.text-color': '#fff'
  });
};

