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
      url: '/path', // 修改为该后端开出接口位置
      methods: 'GET', // 接口使用方法
      headers: {}, // 依需求添加
      auth: false, // 是否需要认证，可用于判断是否要带accessToken，详细实作可参考 src/request 中的 sendRequest
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
