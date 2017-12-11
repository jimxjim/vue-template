import { camelizeKeys } from 'humps';

function CommitProcessing(store, type) {
  const base = type.base;
  const commit = store.commit;

  return function processing() {
    commit(base, { type: type.success, data: null, message: '', status: 0 });
    commit(base, { type: type.failure, error: null });
    commit(base, { type: type.processing, value: true });
  };
}

function CommitSuccess4Login(store, type) {
  const base = type.base;
  const commit = store.commit;

  return function success(response) {
    commit(base, {
      type: type.success,
      data: camelizeKeys(response.data),
      message: response.statusText,
      status: response.status });
  };
}
export function initProcessors(store, type) {
  const base = type.base;
  const commit = store.commit;

  commit(base, { type: type.processing, value: false });
}

export function genProcessors(store, type) {
  return { processing: CommitProcessing(store, type) };
}

export function genProcessors4Login(store, type) {
  return { processing: CommitProcessing(store, type), success: CommitSuccess4Login(store, type) };
}
