import gridMarkup from '../templates/pictures-grid-builder.hbs'
import refs from './refs.js';


const buildMarkup = item => {
    refs.picturesList.insertAdjacentHTML('beforeend', gridMarkup(item))
}


export default buildMarkup
