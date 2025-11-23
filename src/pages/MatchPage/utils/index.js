export const mergePlayers = (start = {}, subs = {}) => ({
  ...start,
  ...subs,
});

export const extractActions = (player) =>
  Object.entries(player?.actions || {})
    .filter(([_, action]) => action?.img && action.img !== "subtitution" && action.minute)
    .sort((a, b) => (parseInt(a[1].minute) || 0) - (parseInt(b[1].minute) || 0));

export const sortByFirstAction = (players) =>
  players.sort((a, b) => {
    const getFirstMinute = (player) => {
      const minutes = Object.values(player.actions || {})
        .filter((a) => a.img !== "subtitution")
        .map((a) => parseInt(a.minute) || Infinity);
      return Math.min(...minutes);
    };
    return getFirstMinute(a[1]) - getFirstMinute(b[1]);
  });
