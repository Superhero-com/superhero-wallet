import { Component, VNode } from 'vue';
import { RouteLocationRaw, RouteRecordRaw } from 'vue-router';

export interface WalletRouteMeta {
  /**
   * Explicitly define the route that the user will be taken to after clicking
   * the app header back arrow.
   * TODO: Temporary solution.
   */
  backRoute?: RouteLocationRaw
  /**
   * Decide if the app header should be hidden
   */
  hideHeader?: boolean
  /**
   * Allow to see the page by unauthorized users
   */
  ifNotAuth?: boolean
  /**
   * Only for unauthorized users
   */
  ifNotAuthOnly?: boolean

  /**
   * Decide if the page allows to edit the displayed data
   */
  isEdit?: boolean
  /**
   * Decide of the route should be saved to browser's local storage
   */
  notPersist?: boolean
  /**
   * Part of the translation string that point to the translated page title
   * 'pages.title[title]`
   */
  title?: string
  /**
   * Decide if the header should display the logo and more button
   * or the back and close buttons.
   */
  showHeaderNavigation?: boolean
  /**
   * Decide if the scrollbar should be visible to the user
   * @default: false
   */
  showScrollbar?: boolean
  showFilterBar?: boolean
  hideSearchBar?: boolean
  hideFilterButton?: boolean
  isMultisig?: boolean
  directBackRoute?: boolean
}

export type WalletAppRouteConfig = Omit<RouteRecordRaw, 'meta'> & {
  meta?: WalletRouteMeta
  component?: VNode | Component | {
    functional: boolean
    render: any
  },
  children?: WalletAppRouteConfig[],
}
