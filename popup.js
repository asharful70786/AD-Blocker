document.addEventListener("DOMContentLoaded", () => {
  const adCountElement = document.getElementById("adCount");
  const resetButton = document.getElementById("resetCount");

  // Fetch blocked ads count
  chrome.storage.local.get("blockedAdsCount", (data) => {
    adCountElement.innerText = data.blockedAdsCount || 0;
  });

  // Reset count button functionality
  resetButton.addEventListener("click", () => {
    chrome.storage.local.set({ blockedAdsCount: 0 });
    adCountElement.innerText = 0;
  });
});
