import ConfirmationTooltip from '../Modal/ConfirmationTooltip/ConfirmationTooltip';

const WorkoutConfirmationTooltip = () => {
  return (
    <ConfirmationTooltip
      title="План тренировок сохранен"
      subtitle="Отправьте его клиенту"
      btnText="Скопировать ссылку"
      isTraining={false}
    />
    );
};
export default WorkoutConfirmationTooltip;
