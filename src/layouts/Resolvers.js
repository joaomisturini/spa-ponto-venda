import React from 'react'
import LayoutsAuth from './Auth'
import LayoutsGuest from './Guest'

export const WithAuth = (Component, { match }) => (
    <LayoutsAuth><Component match={ match } /></LayoutsAuth>
)

export const WithGuest = (Component, { match }) => (
    <LayoutsGuest><Component match={ match } /></LayoutsGuest>
)
