import {useState, useEffect} from 'react';
import styles from './Clients.module.scss';
import addClientImg from '../../assets/images/clients/addClientImage.png';
import plusIcon from '../../assets/images/icons/white-plus.svg';
import searchIcon from '../../assets/images/icons/search-icon.svg';
import ClientsListCard from '../../components/ClientsListCard/ClientsListCard';
import {useNavigate} from 'react-router-dom';
import {IUser} from '../../redux/types/user';
import {useGetClientsListQuery} from "../../redux/services/clientsApi.ts";

type Client = {
  first_name: string;
  last_name: string;
  dob: string;
};

function Clients() {
  const [searchText, setSearchText] = useState('');
  const {data: allUsers = []} = useGetClientsListQuery();

  const filteredClients = allUsers.filter((client: Client) => {
    if (client.last_name) {
      return client.last_name.toLowerCase().includes(searchText.toLowerCase().trim());
    } else {
      return;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="App__container">
      <div className={`${styles.clients__content}`}>
        <h1 className={styles.clients__pageTitle}>Клиенты</h1>

        <div className={styles.clients__searchInputContainer}>
          <img className={styles.clients__searchInputIcon} src={searchIcon} alt="Search Icon"/>
          <input
            className={styles.clients__searchInputField}
            type="text"
            placeholder="Поиск"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button className={styles.clients__addClientBtn} onClick={() => navigate('/client/new')}>
          <img className={styles.clients__addClientBtnImage} src={addClientImg} alt="картинка кнопки"/>
          <span className={styles.clients__addClientBtnText}>
            Добавить клиента <img src={plusIcon} alt="Белый плюсик"/>
          </span>
        </button>

        <ul className={styles.clients__list}>
          {filteredClients.map((user: IUser) => {
            return <ClientsListCard user={user} key={user.id}/>;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Clients;
