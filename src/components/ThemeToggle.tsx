type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

function ThemeToggle({ isDarkMode, onToggleTheme }: ThemeToggleProps) {
  return (
    <button onClick={onToggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeToggle;