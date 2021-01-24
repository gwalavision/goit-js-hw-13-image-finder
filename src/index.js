import refs from './js/refs.js';
import { showQueryResult, showMoreResult } from './js/submit-event'
import '../src/styles.css'

refs.searchForm.addEventListener('submit', showQueryResult)
refs.showMoreButton.addEventListener('click', showMoreResult)
   