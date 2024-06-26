import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

 
class BookmarksView extends View {
  _parentElements = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet . find a nice recipe and bookamrk it  :)';
  _message = '';


  addHandlerRender(handler){
    window.addEventListener('load',handler)
  }
  _generateMarkup() {
    return this._data
    .map(bookmark => previewView.render(bookmark , false))
    .join('');
  }
}
 

export default new BookmarksView();
