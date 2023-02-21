const saveFileButton = document.getElementById("save-file");
saveFileButton.addEventListener("click", function () {
  const editorContent = document.getElementById("editor").value;
  const blob = new Blob([editorContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "file.txt";
  a.click();
  URL.revokeObjectURL(url);
});

// JavaScript code for handling the change event on the "Load File" input
const loadFileInput = document.getElementById("load-file");
loadFileInput.addEventListener("change", function () {
  const file = loadFileInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const editor = document.getElementById("editor");
    editor.value = reader.result;
  };
  reader.readAsText(file);
});
