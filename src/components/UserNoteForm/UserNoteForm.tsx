import Button from '../Button/Button';
import styles from './UserNoteForm.module.scss';

type UserNoteFormProps = {
  title: string;
  content: string;
};

function UserNoteForm({ title, content }: UserNoteFormProps) {
  return (
    <div className={styles.userNoteForm}>
      <p className={styles.userNoteForm__title}>{title}</p>
      <textarea
        className={styles.userNoteForm__input}
        name=""
        id=""
        placeholder="Оставьте заметку об этой тренировке"
      ></textarea>

      <button className={styles.userNoteForm__sendButton}>Отправить</button>
    </div>
  );
}

export default UserNoteForm;
