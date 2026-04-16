const TIMELINE_LOGS_KEY = "timeline-logs";
const FRIEND_GOALS_KEY = "friend-goal-overrides";
const PENDING_TOAST_KEY = "pending-toast";

const isBrowser = () => typeof window !== "undefined";

export const getTimelineLogs = () => {
  if (!isBrowser()) {
    return [];
  }

  return JSON.parse(localStorage.getItem(TIMELINE_LOGS_KEY)) || [];
};

export const saveTimelineLogs = (logs) => {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(TIMELINE_LOGS_KEY, JSON.stringify(logs));
};

export const addTimelineLog = ({ friendId, friendName, type }) => {
  const actionLabel = type.charAt(0).toUpperCase() + type.slice(1);
  const newLog = {
    id: Date.now(),
    friendId,
    friendName,
    type,
    title: `${actionLabel} with ${friendName}`,
    date: new Date().toISOString(),
  };
  const existingLogs = getTimelineLogs();
  const updatedLogs = [newLog, ...existingLogs];

  saveTimelineLogs(updatedLogs);
  return newLog;
};

export const getGoalOverrides = () => {
  if (!isBrowser()) {
    return {};
  }

  return JSON.parse(localStorage.getItem(FRIEND_GOALS_KEY)) || {};
};

export const getGoalForFriend = (friendId, fallbackGoal) => {
  const overrides = getGoalOverrides();

  return overrides[friendId] ?? fallbackGoal;
};

export const updateGoalForFriend = (friendId, goal) => {
  if (!isBrowser()) {
    return;
  }

  const overrides = getGoalOverrides();
  const updatedOverrides = {
    ...overrides,
    [friendId]: goal,
  };

  localStorage.setItem(FRIEND_GOALS_KEY, JSON.stringify(updatedOverrides));
};

export const setPendingToast = (message) => {
  if (!isBrowser()) {
    return;
  }

  sessionStorage.setItem(PENDING_TOAST_KEY, message);
};

export const consumePendingToast = () => {
  if (!isBrowser()) {
    return "";
  }

  const message = sessionStorage.getItem(PENDING_TOAST_KEY) || "";

  if (message) {
    sessionStorage.removeItem(PENDING_TOAST_KEY);
  }

  return message;
};
