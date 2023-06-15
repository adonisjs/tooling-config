import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createEslintRule } from '../utils'

const httpMethods = ['get', 'post', 'put', 'delete', 'patch']

export default createEslintRule({
  name: 'prefer-lazy-controller-import',
  defaultOptions: [],
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Prefer lazy controller import over standard import',
      recommended: 'error',
    },
    schema: [],
    messages: {
      preferLazyControllerImport: 'Replace standard import with lazy controller import',
    },
  },

  create: function (context) {
    let importIdentifiers = []
    let routerIdentifier = ''
    let importNodes = []

    function isRouteCallExpression(node: TSESTree.CallExpression, routerIdentifier: string) {
      return (
        node.callee.type === AST_NODE_TYPES.MemberExpression &&
        node.callee.object.type === AST_NODE_TYPES.Identifier &&
        node.callee.object.name === routerIdentifier &&
        node.callee.property.type === AST_NODE_TYPES.Identifier &&
        httpMethods.includes(node.callee.property.name)
      )
    }

    return {
      /**
       * Track all imported identifiers
       * Also get the local name of the router import
       */
      ImportDeclaration(node) {
        for (const specifier of node.specifiers) {
          if (specifier.type === 'ImportDefaultSpecifier' || specifier.type === 'ImportSpecifier') {
            importIdentifiers.push(specifier.local.name)
            importNodes[specifier.local.name] = node
          }
        }

        if (node.source.value === '@adonisjs/core/services/router') {
          if (node.specifiers[0] && node.specifiers[0].type === 'ImportDefaultSpecifier') {
            routerIdentifier = node.specifiers[0].local.name
          }
        }
      },

      /**
       * Check if we are calling router.get() or any other http method
       */
      CallExpression(node) {
        if (isRouteCallExpression(node, routerIdentifier)) {
          const secondArgument = node.arguments[1]
          if (secondArgument.type !== AST_NODE_TYPES.ArrayExpression) {
            return
          }

          for (const element of secondArgument.elements) {
            if (element.type !== 'Identifier' || !importIdentifiers.includes(element.name)) {
              continue
            }

            context.report({
              node: importNodes[element.name],
              messageId: 'preferLazyControllerImport',
              fix(fixer) {
                const importPath = importNodes[element.name].source.raw
                const newImportDeclaration = `const ${element.name} = () => import(${importPath})`
                return fixer.replaceText(importNodes[element.name], newImportDeclaration)
              },
            })
          }
        }
      },
    }
  },
})