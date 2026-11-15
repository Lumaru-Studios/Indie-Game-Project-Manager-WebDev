async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");

    for (const element of elements) {
        const file = element.getAttribute("data-include");
        const pageTitle = element.getAttribute("data-title") || "Dashboard";
        const pageContent = element.innerHTML.trim();

        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status}`);
            }

            const layoutHtml = await response.text();
            element.innerHTML = layoutHtml;

            const target = element.querySelector("#page-content");
            if (target) {
                target.innerHTML = pageContent;
            }

            const titleEl = element.querySelector("#page-title");
            if (titleEl) {
                titleEl.textContent = pageTitle;
            }

            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            element.querySelectorAll(".sidebar-links a").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });

            if (window.initIGPM) {
                window.initIGPM();
            }

            element.classList.add("include-ready");
        } catch (error) {
            console.error(error);
            element.innerHTML = "<p class=\"include-error\">Die Seite konnte nicht geladen werden.</p>";
            element.classList.add("include-ready");
        }
    }
}

document.addEventListener("DOMContentLoaded", includeHTML);
