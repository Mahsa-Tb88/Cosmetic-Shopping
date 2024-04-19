export default function shopReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setFilter": {
      return {
        ...state,
        page: payload.page,
        q: payload.q,
        limit: payload.limit,
        category,
        sort: payload.limit,
        order: payload.order,
        delay: payload.delay,
      };
    }
  }
}
