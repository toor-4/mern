function Header({ she }) {
  return (
    <div className="header">
      <img src="/images/girl.png" alt="girl" />
      <h1 style={{ fontFamily: 'myFont' }} className="tracker">
        {she} Workout Tracker
      </h1>
    </div>
  );
}
export default Header;
