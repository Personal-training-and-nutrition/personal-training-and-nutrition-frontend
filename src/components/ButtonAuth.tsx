const ButtonAuth = ({ textBtn, className }: { textBtn: string; className?: string }) => {
  return (
    <button className={`buttonAuth ${className}`} type="submit">
      {textBtn}
    </button>
  );
};

export default ButtonAuth;
