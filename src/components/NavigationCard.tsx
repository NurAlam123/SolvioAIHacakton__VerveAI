const NavigationCard = () => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden p-4 *:block">
      <button type="button">Upload</button>
      <a href="/">Dashboard</a>
      <button type="button">Settings</button>
    </div>
  );
};

export default NavigationCard;
