import { useState } from 'react';
import styles from './Clients.module.scss';
import addClientImg from '../../assets/images/clients/addClientImage.png';
import plusIcon from '../../assets/images/icons/white-plus.svg';
import searchIcon from '../../assets/images/icons/search-icon.svg';
import ClientsListCard from '../../components/ClientsListCard/ClientsListCard';
import { useNavigate } from 'react-router-dom';

type ClientTypes = {
  name: string;
  age: number;
  description: string;
}[];

const clients: ClientTypes = [
  { name: 'Никитина Александра', age: 35, description: 'Обратилась с запросом похудеть назначила то-то то-то' },
  { name: 'Агутин Леонид', age: 55, description: 'Просто красавчик' },
  { name: 'Пушкин Александр', age: 36, description: 'Хочет набрать форму перед дуэлью' },
];

function Clients() {
  const [searchText, setSearchText] = useState('');
  // const [filteredClients, setFilteredClients] = useState<ClientTypes>([]);
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchText.toLowerCase().trim()),
  );
  const navigate = useNavigate();

  return (
    <div className={styles.clients__content}>
      <h1 className={styles.clients__pageTitle}>Клиенты</h1>

      <div className={styles.clients__searchInputContainer}>
        <img className={styles.clients__searchInputIcon} src={searchIcon} alt="Search Icon" />
        <input
          className={styles.clients__searchInputField}
          type="text"
          placeholder="Поиск"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <button className={styles.clients__addClientBtn} onClick={() => navigate('/addClient')}>
        <img className={styles.clients__addClientBtnImage} src={addClientImg} alt="картинка кнопки" />
        <span className={styles.clients__addClientBtnText}>
          Добавить клиента <img src={plusIcon} alt="Белый плюсик" />
        </span>
      </button>

      <ul className={styles.clients__list}>
        {filteredClients.map((user) => {
          return <ClientsListCard name={user.name} age={user.age} description={user.description} />;
        })}
      </ul>
    </div>
  );
}

export default Clients;
