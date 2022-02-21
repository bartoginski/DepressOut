export const state = () => ({
  points: 0,
  currentQuestion: 0,
  numberOfQuestions: 0,
})

export const mutations = {
  addPoint(state) {
    state.points++
  },
  nextQuestion(state) {
    state.currentQuestion++
  },
}
