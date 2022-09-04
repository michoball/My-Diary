import "./ToggleSwitch.css";

function ToggleSwitch({
  title,
  type,
  toggleValue,
  onSwitchEvent = () => {},
  ...otherProps
}) {
  const clickToggleHandler = () => {
    onSwitchEvent(!toggleValue);
  };

  return (
    <div className="toggle-container">
      <span>{title && title}</span>
      <input
        type="checkbox"
        className="toggle"
        id="isToggled"
        checked={toggleValue ? true : false}
        onChange={() => onSwitchEvent(!toggleValue)}
        {...otherProps}
      />
      <label htmlFor={type} className="label" onClick={clickToggleHandler}>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
