import React, { useState } from 'react'
import { Global } from './global/globalStyle';
import { List } from './pages/list';

export const App = () => (
  <>
    <Global/>
    <List/>
  </>
);
