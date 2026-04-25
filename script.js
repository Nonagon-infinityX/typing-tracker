let data = [];

function addWPM() {
  const input = document.getElementById("wpmInput");
  const value = Number(input.value);

  if (!value) return;

  data.push(value);
  input.value = "";

  updateUI();
}

function updateUI() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(wpm => {
    const li = document.createElement("li");
    li.textContent = wpm;
    list.appendChild(li);
  });

  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  const max = Math.max(...data);

  document.getElementById("average").textContent = avg.toFixed(1);
  document.getElementById("max").textContent = max;
}
