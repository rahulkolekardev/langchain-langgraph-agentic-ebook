// Highlight active link in the sidebar based on URL
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".sidebar a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === path) {
      link.classList.add("active-link");
    }
  });
})();

// Theme toggle with persistence
(function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const stored = window.localStorage.getItem("ebook-theme");
  if (stored === "dark") {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    window.localStorage.setItem("ebook-theme", mode);
  });
})();

// Simple in-page heading search: focuses the first matching heading
(function () {
  const search = document.getElementById("global-search");
  if (!search) return;

  const headings = Array.from(
    document.querySelectorAll("article h1, article h2, article h3, article h4")
  );

  search.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const query = search.value.trim().toLowerCase();
    if (!query) return;

    const match = headings.find((h) =>
      h.textContent.toLowerCase().includes(query)
    );
    if (match) {
      match.scrollIntoView({ behavior: "smooth", block: "start" });
      match.classList.add("search-hit");
      setTimeout(() => match.classList.remove("search-hit"), 1200);
    }
  });
})();

// Lightweight client-side syntax highlighting for Python code blocks
(function () {
  const codeBlocks = document.querySelectorAll("pre code.language-python");
  if (!codeBlocks.length) return;

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function highlightPythonText(text) {
    const lines = text.split("\n");
    const highlightedLines = lines.map((line) => {
      let out = escapeHtml(line);

      // Strings (single and double quotes, naive but effective for tutorials)
      out = out.replace(
        /(\"[^\"\\]*(?:\\.[^\"\\]*)*\"|'[^'\\]*(?:\\.[^'\\]*)*')/g,
        '<span class="token string">$1</span>'
      );

      // Comments (# ...)
      out = out.replace(
        /(#.*)$/g,
        '<span class="token comment">$1</span>'
      );

      // Numbers
      out = out.replace(
        /\b(\d+(\.\d+)?)\b/g,
        '<span class="token number">$1</span>'
      );

      // Simple keywords (best-effort, may not catch all cases)
      out = out.replace(
        /\b(class|def|return|if|else|elif|for|while|import|from|as|with|try|except|raise|pass|in|is|and|or|not|None|True|False|async|await)\b/g,
        '<span class="token keyword">$1</span>'
      );

      return out;
    });
    return highlightedLines.join("\n");
  }

  codeBlocks.forEach((block) => {
    const original = block.textContent;
    block.innerHTML = highlightPythonText(original);
  });
})();
