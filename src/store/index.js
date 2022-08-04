import { createStore } from "vuex";

//firebase import
import { auth } from "../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

// Create a new store instance.
const store = createStore({
    state: {
        user: null,
        authIsReady: false,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log("User state changed: ", state.user);
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        },
    },
    actions: {
        async signup({ commit }, { email, password }) {
            console.log("sign up action");

            //async code
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (res) {
                commit("setUser", res.user);
            } else {
                throw new Error("Could not complete signup");
            }
        },
        async login({ commit }, { email, password }) {
            console.log("login up action");

            //async code
            const res = await signInWithEmailAndPassword(auth, email, password);

            if (res) {
                commit("setUser", res.user);
            } else {
                throw new Error("Could not complete signin");
            }
        },
        async logout({ commit }) {
            console.log("logout action");

            await signOut(auth);

            commit("setUser", null);
        },
    },
});

//unsub so that it can only fire once and stop firing after the initial connection
const unsub = onAuthStateChanged(auth, (user) => {
    store.commit("setAuthIsReady", true);
    store.commit("setUser", user);
    unsub();
});

export default store;
