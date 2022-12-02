import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
    state: () => ({
        user: {email: ""}
    }),
    actions: {
        getUser() {
            const returnAPI = {
                email: "willian87@gmail.com"
            };
            this.user.email = returnAPI.email;
        }
    }
});