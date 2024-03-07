import style from "./MyAccount.module.scss";

const MyAccount = () => {
  return (
    <div className={style.myAccount}>
      <div className={style.myAccount__wrapper}>
        <div className={style.myAccount__formContainer}>
          <form action="">
            <input type="text" placeholder="Електронна одреса або телефон" />
            <input type="password" />
            <button type="submit">Yвійти</button>
          </form>
        </div>

        <span>або</span>
        <p>ще не маєте аккаунта?</p>
      </div>
    </div>
  );
};

export default MyAccount;
