require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs" } });

require(["vs/editor/editor.main"], function () {
  const editor = monaco.editor.create(document.getElementById("editor-container"), {
    value: "// Welcome to Fred’s HellDesk\n// Write some chaos here…",
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
  });

  // LocalStorage save logic (can expand later)
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("helldesk_code", editor.getValue());
  });

  const saved = localStorage.getItem("helldesk_code");
  if (saved) editor.setValue(saved);
});

document.getElementById("launch-button").addEventListener("click", () => {
  const log = document.getElementById("badpilot-log");
  const lines = [
    "🧠 Badpilot AI: You pushed it. Again. Why?",
    "💀 That launch button does nothing, just like your last relationship.",
    "🔥 Commit failed. Emotionally.",
  ];
  log.innerText = lines[Math.floor(Math.random() * lines.length)];
  document.body.classList.add("shaking");
  setTimeout(() => document.body.classList.remove("shaking"), 500);
});
