import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
	state: () => ({
		signal : true,
		data: null,
		status : null,
		localtions : null,
	}),
  	actions:{
		SetState(e) {
			this.data = e
	  	},
		SetStatus(e) {
			this.status = e
	  	},
		SetSignal() {
			this.signal = !this.signal
	  	},
		SetLocations(e) {
			this.localtions = e
	  	},
	},
	getters: {
		GetState(state) {
		  	return state.data;
		},
		GetStatus(state) {
			return state.status;
	  	},
		GetSignal(state) {
			return state.signal;
	  	},
		GetLocations(state) {
			return state.localtions;
	  	},
	},
});