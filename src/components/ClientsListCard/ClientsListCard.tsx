import { useEffect } from 'react';
import styles from './ClientsListCard.module.scss';
import btnImage from '../../assets/images/clients/clientListBtnPlaceholder.svg';
import { getFirstLetters } from '../../utils/getFirstLetters';
import { getAgeEnding } from '../../utils/getAgeEnding';
import { IUser } from '../../redux/types/user';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

import { setCurrentClient } from '../../redux/slices/clientSlice';

type ClientListCardProps = {
  user: IUser;
};

function ClientsListCard({ user }: ClientListCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fullname = user.first_name + ' ' + user.last_name!;
  let age = 0;

  if (user.dob) {
    age = new Date().getFullYear() - new Date(user.dob).getFullYear();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <li
      className={styles.clientsListCard}
      onClick={() => {
        dispatch(setCurrentClient(user));
        navigate(`/client/card/${user.id}`);
      }}
    >
      <span className={styles.clientsListCard__letters}>{getFirstLetters(fullname)}</span>
      <img className={styles.clientsListCardImage} src={btnImage} alt={user.first_name!} />

      <div className={styles.clientsListCard__info}>
        <p className={styles.clientsListCard__name}>
          {user.first_name} {user.last_name}, {getAgeEnding(user.age)}
        </p>
        {/* <p className={styles.clientsListCard__description}>{description}</p> */}
        <p className={styles.clientsListCard__description}>{user.notes}</p>
      </div>
    </li>
  );
}

export default ClientsListCard;
