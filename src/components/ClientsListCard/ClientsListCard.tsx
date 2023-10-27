import { useEffect } from 'react';
import styles from './ClientsListCard.module.scss';
import btnImage from '../../assets/images/clients/clientListBtnPlaceholder.svg';
import { getFirstLetters } from '../../utils/getFirstLetters';
import { getAgeEnding } from '../../utils/getAgeEnding';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

import { setCurrentClient } from '../../redux/slices/clientSlice';
import { TClientListElement } from '../../redux/types/clients';

type ClientListCardProps = {
  user: TClientListElement;
};

function ClientsListCard({ user }: ClientListCardProps) {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fullname = user.first_name + ' ' + user.last_name!;

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(user)
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
          {user.first_name} {user.last_name}, {getAgeEnding(user.age as number)}
        </p>
        {/* <p className={styles.clientsListCard__description}>{description}</p> */}
        <p className={styles.clientsListCard__description}>{user.notes}</p>
      </div>
    </li>
  );
}

export default ClientsListCard;
