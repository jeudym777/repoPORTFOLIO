const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIl-e-ekmGGUxL482SuJ57Dg8MIrkkRv0AqGpZEWKexMJM0Yj76b4JvILvm4vABDY_sA/exec";

/**
 * Tracks an interaction event and records it in the Google Sheet.
 * Mode is 'no-cors' to avoid preflight issues (fire-and-forget).
 * @param {string} event - The type of event (e.g., 'visit', 'like', 'video_play')
 * @param {string} target - The subject of the event (e.g., 'Skull Troop', 'Intro video')
 * @param {string} details - Additional meta information (e.g., browser or device info)
 */
export const trackEvent = async (event, target = "", details = "") => {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event, target, details }),
    });
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

/**
 * Retrieves the count of likes for all projects.
 * @returns {Promise<Object>} An object mapping project IDs to their like counts (e.g. { 'skull-troop': 12 })
 */
export const getLikesCount = async () => {
  try {
    const response = await fetch(SCRIPT_URL);
    if (!response.ok) throw new Error("Failed to fetch likes");
    const data = await response.json();
    return data.likes || {};
  } catch (error) {
    console.error("Error fetching likes count:", error);
    return {};
  }
};
