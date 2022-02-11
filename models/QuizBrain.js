class QuizBrain {
  get questions() {
    return [
      {
        question: 'Czym jest depresja?',
        answers: {
          a: 'Wymysłem młodych osób',
          b: 'Zaburzeniem psychicznym odznaczającym się długotrwałym obniżeniem nastroju oraz oddziałującym na cały organizm.',
          c: 'Chorobą osób leniwych',
          d: 'Zaburzeniem polegającym jedynie na złym samopoczuciu psychicznym',
        },
        correct: 'b',
      },
      {
        question:
          'Depresja znajduje się w Międzynarodowej Statystycznej Klasyfikacji Chorób i Problemów Zdrowotnych (ICD-10)',
        answers: {
          a: 'Prawda',
          b: 'Fałsz',
        },
        correct: 'a',
      },
      {
        question: 'Ile osób na całym świecie obecnie choruje na depresję?',
        answers: {
          a: '300 mln',
          b: '260 mln',
          c: '100 mln',
          d: '150 mln',
        },
        correct: 'b',
      },
      {
        question:
          'Ile procent uczniów uważa naukę tradycyjną za lepszą od zdalnej?',
        answers: {
          a: '54%',
          b: '82%',
          c: '39%',
          d: '68%',
        },
        correct: 'd',
      },
      {
        question:
          'Co najgorzej wpływa na zdrowie psychiczne uczniów podczas nauki zdalnej?',
        answers: {
          a: 'Brak kontaktu z rówieśnikami',
          b: 'Brak kontaktu z nauczycielem',
          c: 'Za duża ilość materiału',
          d: 'Nic nie wpływa negatywnie na stan zdrowia uczniów',
        },
        correct: 'a',
      },
      {
        question: 'Depresja nie jest chorobą i wynika z lenistwa',
        answers: {
          a: 'Prawda',
          b: 'Fałsz',
        },
        correct: 'b',
      },
      {
        question:
          'Telefonów zaufania, który  po 13 latach traci dofinansowanie przez rząd.',
        answers: {
          a: 'Telefon Zaufania dla Dzieci i Młodzieży',
          b: 'Telefoniczna Pierwsza Pomoc Psychologiczna',
          c: 'Telefon fundacji Dajemy Dzieciom Siłę',
          d: 'Antydepresyjny Telefon Forum Przeciw Depresji',
        },
        correct: 'c',
      },
      {
        question: 'Do kogo zwrócić się o pomoc?',
        answers: {
          a: 'Specjalista',
          b: 'Rodzina, przyjaciele',
          c: 'Nauczyciel',
          d: 'Wszystkie odpowiedzi są poprawne',
        },
        correct: 'd',
      },
      {
        question: 'Co jest najlepsze do utrzymania zdrowia psychicznego?',
        answers: {
          a: 'Unikanie używek, aktywność fizyczna, zdrowe odżywianie, odpowiednia ilość snu, utrzymywanie kontaktu z innymi ludźmi',
          b: 'Spożywanie samego niezdrowego jedzenia oraz mała aktywność fizyczna',
          c: 'Unikanie używek, oddanie się pracy, siedzenie do późna w nocy',
          d: 'Utrzymywanie wielu kontaktów towarzyskich i spożywanie dużej ilości alkoholu',
        },
        correct: 'a',
      },
      {
        question: 'Co robić, aby pomóc osobie w depresji?',
        answers: {
          a: 'Nie powinniśmy odstępować osoby chorej na krok',
          b: 'Należy zasygnalizować, że inni mają się gorzej i wystarczy odrobina chęci',
          c: 'Należy zadbać, aby osoba chora było w ciągłym ruchu i miała wiele kontaktów towarzyskich',
          d: 'Zaoferować pomoc w codziennych czynnościach, zachować wytrwałość, porozmawiać o oczekiwanym wsparciu, nie robić nic na siłę i wbrew woli osoby chorej',
        },
        correct: 'd',
      },
      {
        question:
          'W jakim przedziale wiekowym najczęściej diagnozuje się depresje?',
        answers: {
          a: '12-19',
          b: '20-40',
          c: '40-55',
          d: '55>',
        },
        correct: 'b',
      },
      {
        question:
          'Po jakim czasie występowania objawów depresji należy zwrócić się o pomoc?',
        answers: {
          a: 'miesiąc',
          b: '3 tygodnie',
          c: '2 tygodnie',
          d: '6 miesięcy',
        },
        correct: 'c',
      },
      {
        question: 'Co w obecnych czasach jest najczęstszą przyczyną depresji?',
        answers: {
          a: 'Zbyt mało snu, brak odpoczynku',
          b: 'Toksyczne relacje z ludźmi',
          c: 'Nadmierny, długotrwały stres',
          d: 'Samotność, powierzchowne relacje',
        },
        correct: 'c',
      },
      {
        question:
          'Jaki procent nastolatków boryka się z depresją przed ukończeniem 18 roku życia?',
        answers: {
          a: '40%',
          b: '60%',
          c: '10%',
          d: '20%',
        },
        correct: 'd',
      },
      {
        question:
          'Depresja zawsze jest widoczna na pierwszy rzut oka',
        answers: {
          a: 'Prawda',
          b: 'Fałsz',
        },
        correct: 'b',
      },
    ]
  }

  getCorrectAnswer(questionNum) {
    return this.questions[questionNum].correct
  }

  checkAnswer(questionNum, userAnswer) {
    const correctAnswer = this.getCorrectAnswer(questionNum)
    return correctAnswer === userAnswer
  }
}

export default QuizBrain
