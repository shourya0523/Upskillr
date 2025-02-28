import React from 'react';
import ReactDOM from 'react-dom/client';

// Minimal test to see if React rendering works at all
const MinimalApp = () => {
  return (
    <div style={{ padding: '20px', margin: '20px', border: '2px solid blue' }}>
      <h1>Minimal Test App</h1>
      <p>If you can see this, basic React rendering is working.</p>
    </div>
  );
};

// Try to render directly to the body as a fallback
const bodyElement = document.body;
if (bodyElement) {
  const div = document.createElement('div');
  div.id = 'minimal-test';
  bodyElement.appendChild(div);
  
  try {
    ReactDOM.createRoot(div).render(<MinimalApp />);
    console.log("Minimal test rendered successfully");
  } catch (error) {
    console.error("Failed to render minimal test:", error);
    // Add visible error message to the page
    div.innerHTML = `<div style="color: red; padding: 20px; border: 2px solid red;">
      <h2>React Rendering Error</h2>
      <p>${error.message}</p>
    </div>`;
  }
}