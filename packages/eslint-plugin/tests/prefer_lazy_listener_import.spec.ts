import { test } from '@japa/runner'
import { RuleTester } from '@typescript-eslint/utils/ts-eslint'
import rule from '../src/rules/prefer_lazy_listener_import'

const valids = [
  `
  import emitter from '@adonisjs/core/services/emitter'
  const SendVerificationEmail = () => import('#listeners/send_verification_email')

  emitter.on('user:registered', [SendVerificationEmail, 'handle'])
  `,
]

const invalids = [
  [
    `
    import emitter from '@adonisjs/core/services/emitter'
    import SendVerificationEmail from '#listeners/send_verification_email'

    emitter.on('user:registered', [SendVerificationEmail, 'handle'])
    `,
    `
    import emitter from '@adonisjs/core/services/emitter'
    const SendVerificationEmail = () => import('#listeners/send_verification_email')

    emitter.on('user:registered', [SendVerificationEmail, 'handle'])
    `,
  ],
]

test('Prefer lazy event listener import', ({ assert }) => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  })

  ruleTester.run('prefer-lazy-listener-import', rule, {
    valid: valids,
    invalid: invalids.map((invalid) => ({
      code: invalid[0],
      output: invalid[1],
      errors: [{ messageId: 'preferLazyListenerImport' }],
    })),
  })
})
