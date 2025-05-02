chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ blockedAdsCount: 0 });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "blockAd") {
    chrome.storage.local.get("blockedAdsCount", (data) => {
      const newCount = (data.blockedAdsCount || 0) + 1;
      chrome.storage.local.set({ blockedAdsCount: newCount });
      sendResponse({ success: true });
    });
    // To keep the message channel open for async response
    return true;
  }
});
