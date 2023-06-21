import preferLazyControllerImport from './rules/prefer_lazy_controller_import'
import preferLazyListenerImport from './rules/prefer_lazy_listener_import

export = {
  rules: {
    'prefer-lazy-controller-import': preferLazyControllerImport,
    'prefer-lazy-listener-import': preferLazyListenerImport,
  },
}
