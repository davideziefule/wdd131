
/* =========================
   ELEMENTS
========================= */
const reviewCountElement = document.querySelector("#reviewCount");
const currentYearElement = document.querySelector("#currentyear");

/* =========================
   GET FORM DATA
========================= */
const params = new URLSearchParams(window.location.search);

const product = params.get("product");
const rating = params.get("rating");
const installDate = params.get("installDate");
const submissionId = params.get("submissionId");

/* =========================
   REVIEW COUNTER
========================= */
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

let completedSubmissions = JSON.parse(
    localStorage.getItem("completedSubmissions")
) || [];

const validSubmission = product && rating && installDate && submissionId;

if (validSubmission && !completedSubmissions.includes(submissionId)) {
    reviewCount++;

    completedSubmissions.push(submissionId);

    localStorage.setItem("reviewCount", reviewCount);
    localStorage.setItem(
        "completedSubmissions",
        JSON.stringify(completedSubmissions)
    );
}

/* =========================
   DISPLAY REVIEW COUNT
========================= */
reviewCountElement.textContent = reviewCount;

/* =========================
   FOOTER YEAR
========================= */
currentYearElement.textContent = new Date().getFullYear();
