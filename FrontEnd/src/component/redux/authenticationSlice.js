import { createSlice } from "@reduxjs/toolkit";

// etat initiale des states du store
const initialState = {
  connected: false,
  token: null,
  loading: false,
  error: null,
  user: null,
}

const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    // en cour connexion (statut en attend sans token)
    login(state) {
      state.loading = true
      state.error = null
    },
    // connexion reusi (avec recuperation token)
    goodLogin(state, action) {
      state.loading = false
      state.connected = true
      state.token = action.payload
    },

    isUser(state, action) {
      state.user = action.payload
    },
    // connexion echoue (sans token)
    badLogin(state, action) {
      state.loading = false
      state.error = action.payload
    },
    // deconexion de l'utilisateur
    exitLogin(state) {
      state.connected = false
      state.token = null
      state.user = null
      state.error = null
    },
  },
})

export const { login, goodLogin, isUser, badLogin, exitLogin } = authentication.actions
export default authentication.reducer