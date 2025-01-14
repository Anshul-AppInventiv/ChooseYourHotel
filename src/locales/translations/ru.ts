// {
//     "selectLanguage": "Выберите язык",
//     "email": "Электронная почта",
//     "password": "Пароль",
//     "login": "Войти"
//   }

export const Russian = {
  signUp: {
    title: 'Создайте аккаунт',
    subTitle: 'Пожалуйста, введите свои данные для регистрации.',
    firstNameLabel: 'Имя',
    lastNameLabel: 'Фамилия',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Мобильный номер',
    privacyPolicy:
      'Принимая, вы соглашаетесь с нашей Политикой конфиденциальности и Условиями использования',
    nextButton: 'Далее',
    alreadyAccount: 'Уже есть аккаунт?',
    login: ' Войти',
    selectLanguage: 'Выберите язык',
    error: {
      name: 'Пожалуйста, используйте только буквы, минимальная длина - 3 символа.',
      email: 'Пожалуйста, введите действительный адрес электронной почты.',
      mobile: 'Номер телефона должен содержать минимум 5 цифр и максимум 13 цифр.',
    },
  },
  login: {
    title: 'Добро пожаловать в ReelTrak',
    subTitle:
      'Введите свой мобильный номер, и мы отправим вам код подтверждения',
    phoneLabel: 'Мобильный номер',
    mobileError:
      'Номер мобильного телефона должен быть не менее 5 и не более 13 цифр.',
    nextButton: 'Далее',
    signUpPrompt: 'У вас нет аккаунта?',
    signUp: 'Зарегистрироваться',
  },
  details: {
    title: 'Помогите нам узнать вас лучше',
    subTitle:
      'Пожалуйста, укажите, работаете ли вы в студии, продюсерской компании или являетесь фрилансером.',
    studio: 'Студия',
    production: 'Продюсерская компания',
    freelance: 'Фриланс',
    select: 'Пожалуйста, выберите студию, в которой вы работаете',
    placeholder: 'Поиск студии...',
    emptyText: 'Студии не найдены',
    continue: 'Продолжить',
  },
  filterScreen: {
    title: 'Помогите нам лучше узнать вас',
    subTitle: 'Пожалуйста, выберите студию, в которой вы работаете',
    placeholder: 'Поиск студии...',
    emptyText: 'Записи не найдены',
    continue: 'Продолжить',
  },
  profile: {
    header: {
      back: 'Назад',
      skip: 'Пропустить',
      title: 'Настройка профиля',
    },
    detailText:
      'Пожалуйста, добавьте фото профиля, чтобы ваша производственная команда могла вас узнать в поле.',
    button: {
      continue: 'Продолжить',
      uploadFromGallery: 'Загрузить из галереи',
      openCamera: 'Открыть камеру',
      removeIcon: 'Удалить значок',
    },
  },
  studio:{
    title: 'Помогите нам лучше узнать вас',
    detailText: 'Пожалуйста, выберите свой отдел',
    placeholder: 'Поиск отдела...',
    noRecords: 'Студии не найдены',
    continue: 'Продолжить',
  },
  otpVerification: {
    title: 'Проверка OTP',
    subtitle: 'Введите 4-значный код, отправленный на ваш мобильный номер',
    verify: 'Проверить OTP',
    errorMessages: {
      invalidOtp: 'Неверный OTP код',
      otpLength: 'Пожалуйста, введите 4-значный код.',
      maxAttempts: 'Вы достигли максимального количества попыток. Повторите попытку через 5 минут.',
    },
    verified: 'Ваш аккаунт подтверждён!',
    backButton: 'Назад',
    resend: {
      prompt: 'Не получили код?',
      resendText: 'Отправить снова',
      codeResent: 'Новый код был отправлен на ваш номер телефона.',
    },
  },
};
