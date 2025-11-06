const Footer = () => {
  return (
    <footer className="mt-8 px-4">
      <div className="text-2xl select-none">
        <p className="font-bold tracking-wider">VERVE AI</p>
      </div>

      <ul className="mt-2 space-y-1 *:text-gray-800 *:hover:underline">
        <li className="text-sm">
          <a href="/">About us</a>
        </li>
        <li className="text-sm">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="text-sm">
          <a href="/">Terms &amp; Conditions</a>
        </li>
      </ul>

      <p className="mt-8 text-center">
        <small>&copy; 2025 VerveAI. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
