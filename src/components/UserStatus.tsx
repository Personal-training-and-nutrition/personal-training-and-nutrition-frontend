const UserStatus = ({ statusSpec }: { statusSpec: boolean }) => {
  return (
    // если url специалиста - то
    <div className="status">
      <button className="status__btn  status__btn_active" type="button">
        {statusSpec ? 'Специалист' : 'Пользователь'}
      </button>
      <button className="status__btn" type="button">
        {statusSpec ? 'Пользователь' : 'Стать специалистом'}
      </button>
    </div>
  );
};

export default UserStatus;
