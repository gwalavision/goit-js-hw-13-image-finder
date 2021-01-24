import refs from './refs'



const showLoader = () => {
    refs.showMoreButton.classList.add('d-none')
    refs.loaderButton.classList.remove('d-none')
}

const hideLoader = () => {
    refs.showMoreButton.classList.remove('d-none')
    refs.loaderButton.classList.add('d-none')
}

const clearContent = () => {
    refs.picturesList.innerHTML = ''

}


export {showLoader, hideLoader, clearContent}