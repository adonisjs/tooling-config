import { test } from '@japa/runner'
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'
import rule from '../src/rules/prefer_lazy_controller_import'

const valids = [
  `
  import router from "@adonisjs/core/services/router"
  const lazyController = () => import("./controller")

  router.get("/", "HomeController.index")
  router.get("/test", [lazyController, 'index'])
  `,
]

const invalids = [
  [
    `
    import router from "@adonisjs/core/services/router"
    import HomeController from "./controller"

    router.group(() => {
      router.get("/", [HomeController, 'index'])
    })
    `,
    `
    import router from "@adonisjs/core/services/router"
    const HomeController = () => import("./controller")

    router.group(() => {
      router.get("/", [HomeController, 'index'])
    })
    `,
  ],
]

test('Prefer lazy controller import', ({ assert }) => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  })

  ruleTester.run('prefer-lazy-controller-import', rule, {
    valid: valids,
    invalid: invalids.map((invalid) => ({
      code: invalid[0],
      output: invalid[1],
      errors: [{ messageId: 'preferLazyControllerImport' }],
    })),
  })
})
