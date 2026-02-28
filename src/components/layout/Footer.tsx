function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-4 py-8 text-center">
      <p className="text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} VoltCalc Utility Tools. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
