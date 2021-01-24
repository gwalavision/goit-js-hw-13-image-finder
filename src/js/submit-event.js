import buildMarkup from './build-markup'
import fetchPictures from './api'
import refs from './refs'
import {showLoader, hideLoader, clearContent} from './services'

let page = 1
let inputValue = ''

const showQueryResult = e => {
    e.preventDefault()
    inputValue = e.currentTarget.elements.query.value

    refs.searchButtonSpinner.classList.remove('d-none')

    e.currentTarget.reset()
    page = 1
    clearContent()
    

    fetchPictures(inputValue, page)
        .then(data => {
            buildMarkup(data);
            page += 1
            refs.showMoreButton.classList.remove('d-none')
        })
        .catch(console.log)
        .finally(() => refs.searchButtonSpinner.classList.add('d-none'))

}

const showMoreResult = e => {
    showLoader()

    fetchPictures(inputValue, page)
        .then(data => {
            buildMarkup(data);
            page += 1
            window.scrollTo(0, document.documentElement.offsetHeight)
            hideLoader()
        })
        .catch(console.log)
}


export {showQueryResult, showMoreResult}