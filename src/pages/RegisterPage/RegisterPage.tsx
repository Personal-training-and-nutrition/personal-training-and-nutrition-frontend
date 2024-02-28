import AuthPageLayout from '../../components/AuthPageLayout/AuthPageLayout';
import EnterRole from "../../components/Registration/EnterRole.tsx";
import {useState} from "react";
import EnterData from "../../components/Registration/EnterData.tsx";
import EnterDirection from "../../components/Registration/EnterDirection.tsx";
import EnterPassword from "../../components/Registration/EnterPassword.tsx";

export type TRegister = {
  handleNextStep: () => void;
}

const RegisterPage = () => {
  const [count, setCount] = useState(0);

  const handleNextStep = () => {
    setCount((prevState) => prevState < 3 ? ++prevState : prevState)
  }

  const getActiveStep = () => {
    switch (count) {
      case 0:
        return <EnterRole handleNextStep={handleNextStep}/>
      case 1:
        return <EnterDirection handleNextStep={handleNextStep}/>
      case 2:
        return <EnterData handleNextStep={handleNextStep}/>
      case 3:
        return <EnterPassword handleNextStep={handleNextStep}/>
      default:
        return <EnterRole handleNextStep={handleNextStep}/>
    }
  }


  return (
    <AuthPageLayout text='pегистрация'>
      {
        getActiveStep()
      }
    </AuthPageLayout>
  );
};

export default RegisterPage;
