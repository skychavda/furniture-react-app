import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './container';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faUser)
library.add(faSearch)
library.add(faShoppingBag)
library.add(faCircle)

ReactDOM.render(<Container/>, document.getElementById('root'));