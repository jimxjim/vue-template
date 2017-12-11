import { createTypes, createMutations } from '@/libs';
import Request from '@/api/request';

const types = {
  YOUR_TYPE: createTypes('YOUR_TYPE'),
};

const state = {
  message: {},
  status: {},
  error: {},
};

const actions = {
  yourAction(store) {
    return Request(store, types.YOUR_TYPE, {
      url: '',
      methods: '',
    });
  },
};

const mutations = {
  ...createMutations(types),
};

export default {
  state,
  actions,
  mutations,
};
