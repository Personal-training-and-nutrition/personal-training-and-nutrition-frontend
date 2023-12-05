import AuthPageLayout from '../../components/AuthPageLayout/AuthPageLayout';
import EnterDirection from "../../components/Registration/EnterDirection.tsx";


const RegisterPage = () => {


  return (
    <AuthPageLayout text='pегистрация'>
      {/*<EnterPassword/>*/}
      {/*<EnterData/>*/}
      <EnterDirection />
    </AuthPageLayout>
  );
};

export default RegisterPage;
