const AuthForm = (props: { children: React.ReactNode }) => {
  return (
    <div className='authorize'>
      <form className='authorize__form'>{props.children}</form>
    </div>
  );
};

export default AuthForm;
