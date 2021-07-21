export default class TrainersstoreService {
    data = [
      {
        id: 1,
        fullName: 'Сергей Крайнов',
        trainerClass: 'kraynov',
        info: "Фитнеc, кардио, детский фитнес, ЛФК."
      },
      {
        id: 2,
        fullName: 'Екатерина Исаева',
        trainerClass: 'isaeva',
        info: "фитнес, хореография, Стретчинг, ОФП"
      },
      {
        id: 3,
        fullName: "Наталья Краснова",
        trainerClass: 'krasnova',
        info: "Фитнеc, кардио, ЛФК, ОФП, для всей семьи"
      },
      {
        id: 4,
        fullName: "Кирилл Тимофеев",
        trainerClass: 'timofeev',
        info: "Фитнеc, кардио, ЛФК, ОФП, для всей семьи"
      },
      {
        id: 5,
        fullName: "Роман Бортник",
        trainerClass: 'bortnik',
        info: "фитнес, Стретчинг, ОФП, кроссфит, воркаут"
      },
      {
        id: 6,
        fullName: "Самойлова Марина",
        trainerClass: 'samoylova',
        info: "Фитнес, ОФП"
      },
      {
        id: 7,
        fullName: "Юрий Цихорский",
        trainerClass: 'tsikhorsky',
        info: "Фитнеc"
      },
      {
        id: 8,
        fullName: "Александр Павлов",
        trainerClass: 'pavlov',
        info: "Фитнес, пилатес, ОФП."
      },
      {
        id: 9,
        fullName: "Алиса Говорова",
        trainerClass: 'govrova',
        info: "Йога, групповые."
      },
    ];
  
    getTrainers() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.75) {
            reject(new Error('Something bad happened'));
          } else {
            resolve(this.data);
          }
        }, 700);
      });
    }
  }