const key = "color-theme";

export function updateTheme(theme: "dark" | "light") {
  localStorage.setItem(key, theme);
}

export function getTheme() {
  const defaultScheme = "dark";
  const theme = localStorage.getItem(key);

  if (!theme) {
    updateTheme(defaultScheme);
  }

  return theme || defaultScheme;
}
