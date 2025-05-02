const hideAds = () => {
  // Remove banner ads
  const banners = document.querySelectorAll(".ytp-ad-module, .ytp-ad-overlay-slot");
  banners.forEach(banner => {
    banner.remove();
    chrome.runtime.sendMessage({ action: "blockAd" });
  });

  // Skip video ads
  const skipButton = document.querySelector(".ytp-ad-skip-button");
  if (skipButton) {
    skipButton.click();
    chrome.runtime.sendMessage({ action: "blockAd" });
  }

  // Hide sidebar ads
  const sidebarAds = document.querySelectorAll("#secondary #advertisement");
  sidebarAds.forEach(ad => {
    ad.remove();
    chrome.runtime.sendMessage({ action: "blockAd" });
  });
};

// Continuously check for ads every second
setInterval(hideAds, 1000);
