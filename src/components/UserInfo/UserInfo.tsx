import styles from './UserInfo.module.scss';
import { useParams } from 'react-router-dom';
import { getFirstLetters } from '../../utils/getFirstLetters';
import { getAgeEnding } from '../../utils/getAgeEnding';
import {useRetrieveClientQuery} from "../../redux/services/clientsApi.ts";
import {IClientRetrieve} from "../../redux/types/clients.ts";

function UserInfo() {
  // const client = useSelector((state: RootState) => state.currentClient.client);
  const { id = '' } = useParams();
  const { data: client = []  as never as IClientRetrieve} = useRetrieveClientQuery(id);
  const fullname = client.user.first_name + ' ' + client.user.last_name!;

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__avatar}>{getFirstLetters(fullname)}</div>
      <div className={styles.userInfo__name}>
        {client.user.first_name}  {client?.user?.middle_name} {client.user.last_name}, <span>{getAgeEnding(client.age) || '0 лет'}</span>
      </div>

      <div className={styles.userInfo__data}>
        <p className={styles.userInfo__dataParam}>
          Рост: <span className={styles.userInfo__dataValue}>{`${client.user.params.height} см`}</span>
        </p>

        <p className={styles.userInfo__dataParam}>
          Вес: <span className={styles.userInfo__dataValue}>{`${client.user.params.weight} кг`}</span>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
