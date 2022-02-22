<template>
  <div class="flex w-full justify-center items-center antialiased text-gray-700 ">
    <div class="flex  w-11/12 md:w-7/12 justify-center items-center">
      <div class="w-full max-x-xl">
        <div class="bg-white p-12 rounded-lg shadow-lg w-full">
          <div v-if="index < count">
            <p class="text-2xl font-bold">
              {{ questions[index]['question'] }}
            </p>
            <label 
              v-for="answer, key in questions[index]['answers']"
              :key="answer.id"
              :for="key"
              class="block mt-4 border border-grey-300 rounded-lg py-2 px-6 text-lg"
              :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == '',
              'bg-red-200' : selectedAnswer == key,
              'bg-green-200' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"
              >
                <input 
                  :id="key" 
                  v-model="selectedAnswer"
                  type="radio" 
                  class="hidden" 
                  :value="key" 
                  :disabled="selectedAnswer != ''"
                  @change="answered($event)"
                />
                {{ answer }}
            </label>
            <div class="mt-5 float-root">
              <button 
              v-show="selectedAnswer != '' && index < count - 1"
              class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
              @click="nextQuestion"
              >
                Następne &gt;
              </button>
              <button 
              v-show="selectedAnswer != '' && index == count -1"
              class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
              @click="showResults"
              >
                Koniec
              </button>
            </div>
          </div>
          <div v-else>
            <h2 class="text-bold text-2xl text-3xl">
              Wynik
            </h2>
            <div class="flex justify-start space-x-4 mt-6">
              <p>
                Twoje poprawne odpowidzi to 
                <span class="text-green-700">
                  {{ correctAnswers }}
                </span>
                na 10 :)
              </p>
            </div>
            <button
              class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
              @click="resetQuiz"
              >
                Jeszcze raz
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
        selectedAnswer: '',
        count: 10,
        correctAnswers: 0,
        questions: [
          {
              question: "1. Czym jest depresja?",
              answers: {
                a: 'Wymysłem młodych osób.', 
                b: 'Zaburzeniem psychicznym odznaczającym się długotrwałym obniżeniem nastroju oraz oddziałującym na cały organizm.',
                c: 'Chorobą osób leniwych.',
                d: 'Zaburzeniem polegającym jedynie na złym samopoczuciu psychicznym.',
              },
              correctAnswer: 'b'
          },
          {
              question: "2. Ile osób na całym świecie obecnie choruje na depresję?",
              answers: {
                a:'300 mln',
                b:'260 mln',
                c:'100 mln',
                d:'150 mln',
              },
              correctAnswer: 'b',
          },
          {
              question: "3. Ile procent uczniów uważa naukę tradycyjną za lepszą od zdalnej?",
              answers: {
                a:'54 %',
                b:'82%',
                c:'39%',
                d:'68%',
              },
              correctAnswer: 'd',
          },
          {
              question: "4. Co najgorzej wpływa na zdrowie psychiczne uczniów podczas nauki zdalnej?",
              answers: {
                a:'Brak kontaktu z rówieśnikami.',
                b:'Brak kontaktu z nauczycielem.',
                c:'Za duża ilość materiału.',
                d:'Nic nie wpływa negatywnie na stan zdrowia uczniów.',
              },
              correctAnswer: 'a',
          },
          {
              question: "5. Do kogo zwrócić się o pomoc?",
              answers: {
                a:'Specjalista',
                b:'Rodzina, przyjaciele',
                c:'Nauczyciel',
                d:'Wszystkie odpowiedzi są poprawne',
              },
              correctAnswer: 'd',
          },
          {
              question: "6. Depresja znajduje się w Międzynarodowej Statystycznej Klasyfikacji Chorób i Problemów Zdrowotnych (ICD-10)",
              answers: {
                a:'Prawda',
                b:'Fałsz',
              },
              correctAnswer: 'a',
          },
          {
              question: "Jaki procent nastolatków boryka się z depresją przed ukończeniem 18 roku życia?",
              answers: {
                a:'40%',
                b:'60%',
                c:'10%',
                d:'20%',
              },
              correctAnswer: 'd',
          },
          {
              question: "8. W jakim przedziale wiekowym najczęściej diagnozuje się depresje?",
              answers: {
                a:'12-19',
                b:'20-40',
                c:'40-55',
                d:'55>',
              },
              correctAnswer: 'b',
          },
          {
              question: "9. Po jakim czasie występowania objawów depresji należy zwrócić się o pomoc?",
              answers: {
                a:'miesiąc',
                b:'3 tygodnie',
                c:'2 tygodnie',
                d:'6 miesięcy',
              },
              correctAnswer: 'c',
          },
          {
              question: "10. Co w obecnych czasach jest najczęstszą przyczyną depresji?",
              answers: {
                a:'Zbyt mało snu, brak odpoczynku.',
                b:'Toksyczne relacje z ludźmi.',
                c:'Nadmierny, długotrwały stres.',
                d:'Samotność, powierzchowne relacje.',
              },
              correctAnswer: 'c',
          },
        ]
      }
    },
    methods: {
      answered(e) {
        this.selectedAnswer = e.target.value;
        if (this.selectedAnswer === this.questions[this.index].correctAnswer) {
          this.correctAnswers++;
        }
      },
      nextQuestion() {
        this.index++;
        this.selectedAnswer = '';
      },
      showResults() {
        this.index++;
      },
      resetQuiz() {
        this.index = 0;
        this.selectedAnswer = '';
        this.correctAnswers = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>