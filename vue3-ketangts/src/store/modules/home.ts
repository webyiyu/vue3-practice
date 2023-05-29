import { CATEGORY_TYPE, IHomeState } from "@/typings/home"
import { Module } from "vuex"
import {IGlobalState} from '../index'

const state: IHomeState = {
  currentCategory: CATEGORY_TYPE.ALL,
  sliders: [],
  lessons: {
    hasMore: true,
    loading: false,
    offset: 0,
    limit: 5,
    list: [],
  }
}

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state
}

export default home