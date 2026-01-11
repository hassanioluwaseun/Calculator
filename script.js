function formatAmount(input) {
  let value = input.value.replace(/,/g, "");

  if (isNaN(value) || value === "") {
    input.value = "";
    return;
  }

  input.value = Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

function calculateLive() {
  const p = document.getElementById("percentage").value;
  let a = document.getElementById("amount").value.replace(/,/g, "");

  if (p === "" || a === "" || isNaN(a)) {
    document.getElementById("resultValue").innerText = "—";
    return;
  }

  const result = (p / 100) * a;

  document.getElementById("resultValue").innerText =
    `${p}% of ${Number(a).toLocaleString()} = ${result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
}