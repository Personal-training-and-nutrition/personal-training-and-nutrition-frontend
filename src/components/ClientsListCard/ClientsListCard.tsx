import styles from './ClientsListCard.module.scss';
import btnImage from '../../assets/images/clients/clientListBtnPlaceholder.svg';
import { getFirstLetters } from '../../utils/getFirstLetters';

type ClientListCardProps = {
  name: string;
  age: number;
  description: string;
};

function ClientsListCard({ name, age, description }: ClientListCardProps) {
  return (
    <li className={styles.clientsListCard}>
      <span className={styles.clientsListCard__letters}>{getFirstLetters(name)}</span>
      <img className={styles.clientsListCardImage} src={btnImage} alt={name} />

      <div className={styles.clientsListCard__info}>
        <p className={styles.clientsListCard__name}>
          {name}, {age} лет
        </p>
        <p className={styles.clientsListCard__description}>{description}</p>
      </div>
    </li>
  );
}

export default ClientsListCard;
