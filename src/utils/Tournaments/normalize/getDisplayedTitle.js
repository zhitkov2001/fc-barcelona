import { getTitleWidth } from "./getTitleWidth";

export const getDisplayedTitle = (team, maxWidth) => {
  if (getTitleWidth(team.title) <= maxWidth) {
    return team.title;
  }

  if (getTitleWidth(team.shortTitle) <= maxWidth) {
    return team.shortTitle;
  }

  return team.abbr;
};