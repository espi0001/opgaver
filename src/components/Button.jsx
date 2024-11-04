const Button = ({ variant = "primary", text, icon = null }) => {
  const variants = {
    primary: "bg-brand text-white hover:bg-indigo-500",
    secondary: "text-gray-900 font-semibold py-2",
  };

  const classes = `px-3 text-sm rounded-md inline-flex items-center gap-1 ${variants[variant] || ""}`;

  return (
    <button className={classes}>
      {/* {icon && <span className="icon">{icon}</span>} */}
      {text}
    </button>
  );
};

export default Button;
