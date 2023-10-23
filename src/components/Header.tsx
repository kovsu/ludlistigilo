function Header() {
  return (
    <header flex="~ justify-between items-center" p="y-4">
      <div flex="~ items-center gap-4">
        <img className="w-12 h-12" src="/playlist.svg" alt="logo" />
        <h1>Ludlistigilo</h1>
      </div>
      <a className="i-carbon-logo-github text-xl" href="https://github.com/kovsu/ludlistigilo" target="_blank" />
    </header>
  );
}

export default Header;
