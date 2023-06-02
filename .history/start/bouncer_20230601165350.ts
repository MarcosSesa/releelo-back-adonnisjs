export const { actions } = Bouncer

export const { policies } = Bouncer.registerPolicies({
  BookPolicy: () => import('App/Policies/BooksPolicy'),
})
