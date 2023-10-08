import styles from './UserInfo.module.scss';
import { useParams } from 'react-router-dom';
import { getFirstLetters } from '../../utils/getFirstLetters';
import { getAgeEnding } from '../../utils/getAgeEnding';
import { useRetrieveUserQuery } from '../../redux/services/userApi';
import { IUser } from '../../redux/types/user';

function UserInfo() {
  // const client = useSelector((state: RootState) => state.currentClient.client);
  const { id = '' } = useParams();
  const { data: client = [] as IUser, isLoading, isFetching, isError } = useRetrieveUserQuery(id);
  const fullname = client.first_name + ' ' + client.last_name!;

  let age = 0;
  if (client.dob) {
    age = new Date().getFullYear() - new Date(client.dob).getFullYear();
  }

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__avatar}>{getFirstLetters(fullname)}</div>
      <div className={styles.userInfo__name}>
        {client.first_name} {client.last_name}, <span>{getAgeEnding(age)}</span>
      </div>

      <div className={styles.userInfo__data}>
        <p className={styles.userInfo__dataParam}>
          Рост: <span className={styles.userInfo__dataValue}>170см</span>
        </p>

        <p className={styles.userInfo__dataParam}>
          Вес: <span className={styles.userInfo__dataValue}>65кг</span>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
