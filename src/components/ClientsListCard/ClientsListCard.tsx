import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import btnImage from '../../assets/images/clients/clientListBtnPlaceholder.svg';
import { useAppDispatch } from '../../redux/store';
import { getAgeEnding } from '../../utils/getAgeEnding';
import { getFirstLetters } from '../../utils/getFirstLetters';
import styles from './ClientsListCard.module.scss';

import { setCurrentClient } from '../../redux/slices/clientSlice';
import { TClientListElement } from '../../redux/types/clients';
import { PATH_CLIENT_CARD } from '../../utils/constants';

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
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={styles.clientsListCard}
      onClick={() => {
        dispatch(setCurrentClient(user));
        navigate(`${PATH_CLIENT_CARD}/${user.id}`);
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
