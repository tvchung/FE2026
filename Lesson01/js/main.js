// Kiểm tra JS đã được nhúng chưa
console.log("✅ JS đã chạy: main.js loaded");

const btn = document.getElementById("btnHello");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const now = new Date().toLocaleString("vi-VN");
  result.textContent = `Xin chào! Bạn đã click lúc: ${now}`;
});
